"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"
import Link from "next/link";
import UniqueCheck from "@/components/users/unique_check";

export default function Home() {

  const [user_identifier_or_email, setUserIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // フォーム送信
  const handleSubmit = async (e: React.FormEvent) => {
    // デフォだと送信ボタン押したら(onSubmit発火したら)ページのリロードが入る
    // fetch が完了する前にリロードが走って、処理が吹っ飛ぶ！
    e.preventDefault();  // リロード防止

    // 実際の処理内容
    // fetchでリクエスト送ってそのレスポンスがresに入る.この一連の動作が終わるまで次に進まないようにするためにawait.
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_identifier_or_email, password }),
    });

    const data = await res.json();  // レスポンスの中身を取り出すのに若干時間いるのでawait入れる.
    if(data.user_id){
      console.log(data.user_id)
    }
    setMessage(data.error || "ログイン成功");
  };






  return (
    <>
      {/* 大枠のVStack */}
      <div className="flex flex-col items-center space-y-4 w-screen h-screen bg-gray-200">

        <header className="w-full bg-white shadow"></header>

        {/* 本体 */}
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-3xl shadow-lg p-8 mt-8 md:max-w-120">

          {/* タイトルと説明部分 */}
          <div className="flex flex-col items-center w-full mb-8">
            {/* タイトル */}
            <p className="text-center text-3xl font-normal text-gray-800">
              アカウントを新規作成
            </p>

            {/* 挨拶文 */}
            <p className="text-center text-base font-normal text-gray-500">
              We missed you! Please enter your details.
            </p>
          </div>


          {/* ユーザーID */}
          <div className="flex flex-col items-start w-full">
            <p className="text-center text-base font-normal text-gray-800">
              ユーザーID
            </p>
            {/* テキストフィールドとユニーク判定 */}
            <div className="flex flex-row items-center justify-center w-full">
              <Input
                type="text"
                value={user_identifier_or_email}
                placeholder="ユーザーID" // onChangeで入力値eを監視して、useStateの状態を更新する
                onChange={(e) => {
                  const value = e.target.value
                  setUserIdentifier(value)
                }} />
            </div>
          </div>

          {/* パスワード */}
          <div className="flex flex-col items-start w-full mb-6">
            <p className="text-center text-base font-normal text-gray-800">
              パスワード
            </p>
            <Input
              type="password"
              value={password}
              placeholder="パスワード"
              // onChangeで入力値eを監視して、useStateの状態を更新する
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* パスワードを保存 */}
          <div className="flex flex-row items-center justify-center w-full mb-8">
            <p className="inline-flex items-center">
              <input type="checkbox" className="checkbox mr-2" />
              <span className="text-gray-700 text-sm">Remember me</span>
            </p>
          </div>

          {/* エラーメッセージ */}
          <div className="flex flex-row items-center justify-center w-full mb-2 h-8">
            <p className="text-center text-base font-normal text-red-500">
              {message}
            </p>
          </div>

          {/* 送信ボタン */}
          <div className="flex flex-row items-center justify-center w-full mb-8">

            <button type="submit" className="btn btn-primary">新規登録</button>
          </div>

          {/* アカウントを持ってない場合 */}
          <div className="flex flex-row items-center justify-center w-full">
            <p className="text-center text-base font-normal text-gray-800">
              アカウントを持っていませんか？
              <Link href="/signup" className="text-blue-600 hover:underline">
                ログインはこちら
              </Link>
            </p>
          </div>

        </form>


      </div>
    </>
  );
}