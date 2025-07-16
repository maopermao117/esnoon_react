"use client";
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { login } from './actions'
import Link from "next/link";

export default function () {
  const [email, Setemail] = useState<string>("");
  const [password, Setpassword] = useState<string>("");
  const [ispassword, Setispassword] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen relative">
        {/* 背景部分 */}
        <div className="flex flex-col items-center absolute inset-0 z-0 bg-white">

        </div>

        {/* メインコンテンツ */}
        <div className="flex flex-col items-center justify-center md:justify-start absolute inset-0 z-10">
          <div className="flex flex-col items-center w-full p-4 md:w-120">

            {/* タイトル */}
            <div className="flex flex-col items-center w-full space-y-4">
              <span className="text-3xl font-bold">ログイン</span>
              <span className="text-xl text-gray-400">Hi! Welcome back, you've been missed</span>
            </div>

            <div className="flex flex-col items-center w-full">
              {/* メールアドレス */}
              <div className="flex flex-col items-start w-full py-4 space-y-2">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full border-2 border-gray-100"
                  // onChangeで入力値eを監視して、useStateの状態を更新する
                  onChange={(e) => Setemail(e.target.value)}
                />
              </div>

              {/* パスワード */}
              <div className="flex flex-col items-start w-full py-4 space-y-2">
                <span>Password</span>
                <div className="flex flex-row items-center justify-start w-full relative">
                  <input
                    type={ispassword ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="example123"
                    className="input w-full border-2 border-gray-100"
                    // onChangeで入力値eを監視して、useStateの状態を更新する
                    onChange={(e) => Setpassword(e.target.value)}
                  />
                  <div className="absolute right-3 z-20" onClick={() => Setispassword(!ispassword)}>
                    {ispassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    )}
                  </div>
                </div>

              </div>

              {/* パスワードを忘れた */}
              <div className="flex flex-row items-center justify-end w-full">
                <span className="text-teal-500 font-semibold underline">パスワードを忘れた?</span>
              </div>

              {/* 新規登録ボタン */}
              <div className="flex flex-row items-center justify-center w-full mt-8">
                <button formAction={login} className="text-white font-bold px-10 py-4 bg-teal-400 w-2/3 rounded-4xl active:bg-teal-500">ログイン</button>
              </div>

              {/* 他サインイン促す */}
              <div className="flex flex-row items-center justify-center w-60 mt-12">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="mx-4 text-gray-500 text-sm">Or sign in with</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* 他サインインボタン */}
              <div className="flex flex-row items-center justify-between w-56 mt-12">
                {/* Appleボタン */}
                <button className="flex items-center p-4 rounded-full border hover:bg-gray-100">
                  <FaApple className="w-8 h-8" />
                </button>
                {/* グーグルボタン */}
                <button className="flex items-center p-4 rounded-full border hover:bg-gray-100">
                  <FcGoogle className="w-8 h-8" />
                </button>
                {/* Facebookボタン */}
                <button className="flex items-center p-4 rounded-full border hover:bg-gray-100">
                  <FaFacebook className="w-8 h-8" />
                </button>
              </div>


              {/* または新規登録 */}
              <div className="flex flex-row items-center justify-center w-full mt-16">
                <p className="font-semibold">
                  アカウントを持っていませんか？
                </p>
                <Link href="/signup" className="underline text-teal-500 font-semibold">
                  新規登録
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}