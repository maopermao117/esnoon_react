"use client";
import Link from "next/link";
import { Progress } from "@/components/ui/progress"
import { useState } from "react";


export default function () {
  const [userName, SetuserName] = useState<string>("");
  const [userIdentifier, SetuserIdentifier] = useState<string>("");

  //UserIDの一意性確認.
  



  return (
    <>
      <div className="flex flex-col items-center min-h-screen relative">
        {/* 背景レイヤー */}
        <div className="flex flex-col items-center absolute inset-0 z-0">

        </div>
        {/* メインコンテンツレイヤー */}
        <div className="flex flex-col items-center justify-start absolute inset-0 z-10">
          <div className="flex flex-col items-center w-full p-4">

            {/* 進捗 */}
            <div className="flex flex-col items-center w-full px-20 mt-20">
              <Progress className="" value={20} />
            </div>

            {/* タイトル */}
            <div className="flex flex-col items-center w-full space-y-4 mt-12">
              <span className="text-3xl font-bold">アカウントを新規作成</span>
              <div className="flex flex-col items-center text-xl text-gray-400">
                <span>Fill your infomation below or register</span>
                <span>with your social account.</span>
              </div>
            </div>

            {/* ユーザーネーム */}
            <div className="flex flex-col items-start w-full mt-12 space-y-2">
              <span className="ml-1">UserName</span>
              <input
                type="text"
                name="userName"
                placeholder="example_kun"
                className="input input-bordered w-full border-2 border-gray-100"
                // onChangeで入力値eを監視して、useStateの状態を更新する
                onChange={(e) => SetuserName(e.target.value)}
              />
            </div>



            {/* ユーザーID */}
            <div className="flex flex-col items-start w-full mt-12 space-y-2">
              <span className="ml-1">UserID</span>
              <div className="relative w-full">
                <input
                  type="text"
                  name="userName"
                  placeholder="example_kun"
                  className="input input-bordered w-full border-2 border-gray-100 pl-7"
                  // onChangeで入力値eを監視して、useStateの状態を更新する
                  onChange={(e) => SetuserIdentifier(e.target.value)}
                />
                <span className="absolute left-3 top-2 text-gray-500 z-10">@</span>
              </div>
            </div>

            {/* 送信ボタン */}
            <div className="flex flex-row items-center justify-center w-full mt-8">
              <button className="text-white font-bold px-10 py-4 bg-teal-400 w-2/3 rounded-4xl">次へ</button>
            </div>


          </div>
        </div>

        {/* 戻るボタンレイヤー */}
        <div className="flex flex-row justify-start items-center w-full absolute z-20">
          <div className="flex flex-row items-center justify-start w-full md:hidden">
            <Link href="/mosya4" className="mt-4 ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 font-bold">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}