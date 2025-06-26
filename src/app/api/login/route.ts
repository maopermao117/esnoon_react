import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();  // ここでフロントから送られるリクエストの中のbodyの部分をjson形式に変換してる.
    const { user_identifier_or_email, password } = body;  // 受け取ったbodyを分割代入してる(分割代入は文字列の完全一致じゃないと分割で代入できない).

    // 入力チェック（空ならエラー返す)
    if (!user_identifier_or_email || !password) { // 変数名の前に!をつけるとnillチェックできる.nillならtrue.
      return new Response(
        JSON.stringify({ error: "すべての項目を入力してください" }), //return new Response(JSON.stringigy({キー: 値}))を使うとjsonのbodyの部分を記述できてフロントに送れる.
        { status: 400 }
      );
    }

    // user_identifier か email に一致するユーザーを検索し、パスワードも一致することを確認
    const user = await prisma.users.findFirst({
      where: {
        OR: [
          { user_identifier: user_identifier_or_email },
          { email: user_identifier_or_email }
        ],
        password: password,
      },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "ログイン情報が正しくありません" }), {
        status: 401,
      });
    }

    // 成功したらレスポンスとして新規ユーザーを返す
    return new Response(JSON.stringify({ successs: true, user_id: user.id.toString() }), { status: 201 });  // new Response()の第一引数がjsonのbodyになって、第二引数がオプション扱いでステータスとか入れてるだけ.
  } catch (error) {
    // catchの部分はエラーハンドリング
    console.error(error);
    return new Response(
      JSON.stringify({ error: "ログインエラーが発生しました" }),
      { status: 500 }
    );
  }
}