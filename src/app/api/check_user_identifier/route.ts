import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();  // ここでフロントから送られるリクエストの中のbodyの部分をjson形式に変換してる.
    const { user_identifier } = body;  // 受け取ったbodyを分割代入してる(分割代入は文字列の完全一致じゃないと分割で代入できない).

    // 入力チェック（空ならエラー返す)
    if (!user_identifier) { // nillなら
      return new Response(
        JSON.stringify({ error: "ユーザーIDを入力してください" }), //return new Response(JSON.stringigy({キー: 値}))を使うとjsonのbodyの部分を記述できてフロントに送れる.
        { status: 400 }
      );
    }

    // 処理内容(await prisma.users.create(...)を書いた瞬間に実行される. const 定数名 は結果を代入してるだけ)
    // 重複チェック（DB上に既に同じuser_identifierがあるか）
    const existingUser = await prisma.users.findFirst({
      where: { user_identifier },
    });

    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "このユーザーIDは既に使用されています" }),
        { status: 409 } // 409 Conflict：重複などの競合エラー
      );
    }

    // 成功したらレスポンスとして新規ユーザーを返す
    return new Response(JSON.stringify({success: true}), { status: 201 });  // new Response()の第一引数がjsonのbodyになって、第二引数がオプション扱いでステータスとか入れてるだけ.
  } catch (error) {
    // catchの部分はエラーハンドリング
    console.error(error);
    return new Response(
      JSON.stringify({ error: "ユーザー登録中にエラーが発生しました" }),
      { status: 500 }
    );
  }
}