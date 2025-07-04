// app/api/signup/route.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();  // ここでフロントから送られるリクエストの中のbodyの部分をjson形式に変換してる.
    const { user_identifier, email, password } = body;  // 受け取ったbodyを分割代入してる(分割代入は文字列の完全一致じゃないと分割で代入できない).

    // 入力チェック（最低限）
    if (!user_identifier || !email || !password) {  // 変数名の前に!をつけるとnillチェックできる.nillならtrue.
      return new Response(
        JSON.stringify({ error: "すべての項目を入力してください" }),  //return new Response(JSON.stringigy({キー: 値}))を使うとjsonのbodyの部分を記述できてフロントに送れる.
        { status: 400 }
      );
    }

    // 処理内容(await prisma.users.create(...)を書いた瞬間に実行される. const 定数名 は結果を代入してるだけ)
    const newUser = await prisma.users.create({
      data: {
        user_identifier,
        email,
        password,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    // BigIntを文字列に変換（必要なフィールドだけ）
    const safeUser = {
      ...newUser,
      id: newUser.id.toString(),  // ← これが重要
    };

    return new Response(JSON.stringify(safeUser), { status: 201 }); // new Response()の第一引数がjsonのbodyになって、第二引数がオプション扱いでステータスとか入れてるだけ.
  } catch (error) {
    // catchの部分はエラーハンドリング
    console.error(error);
    return new Response(
      JSON.stringify({ error: "ユーザー登録中にエラーが発生しました" }),
      { status: 500 }
    );
  }
}