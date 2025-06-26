"use client";

import Link from "next/link";
import Image from "next/image";
import Drawer from "@/components/users/drawer";
import { useState } from "react";

export default function () {

  const [content, setContent] = useState<string>("");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

// ボタン押下時
const handleLikeToggle = async (postId: number) => {
  const isLiked = likedPosts.has(postId);

  // フロント上は即時切り替え（楽観的UI）
  setLikedPosts(prev => {
    const next = new Set(prev);
    isLiked ? next.delete(postId) : next.add(postId);
    return next;
  });

  // APIリクエスト（後から整合性とる）
  try {
    const res = await fetch(`/api/posts/${postId}/${isLiked ? 'unlike' : 'like'}`, { method: 'POST' });
    if (!res.ok) throw new Error();
  } catch (e) {
    // エラー時はUIを元に戻す
    setLikedPosts(prev => {
      const next = new Set(prev);
      isLiked ? next.add(postId) : next.delete(postId);
      return next;
    });
  }
};

  return (
    <>
      {/* 大枠のVStack */}
      <div className="flex flex-col items-center space-y-4 w-full h-screen">

        <header className="w-full px-4 py-2 bg-white shadow">
          <div className="flex flex-row items-center justify-between w-full">
            {/* 左側: ドロワー */}
            <Drawer />

            {/* 右側のボタン群 */}
            <div className="flex flex-row items-center space-x-2">
              <Link href="/signup" className="btn btn-primary btn-sm">新規登録</Link>
              <Link href="/login" className="btn btn-outline-primary btn-sm">ログイン</Link>
            </div>
          </div>
        </header>

        {/* 投稿作成カード */}
        <form className="flex flex-row items-start justify-start w-full md:w-132 bg-white p-4 border-1 border-gray-100">
          {/* アイコンの部分 */}
          <div className="flex flex-col items-center">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
          </div>

          {/* 右の部分 */}
          <div className="flex flex-col items-start w-full pl-8">
            {/* ユーザーネームとID */}
            <div className="flex flex-row items-center justify-start w-full">
              <p className="text-center text-base font-semibold text-gray-800">
                まお
              </p>
              <p className="text-center text-sm font-normal text-gray-500">
                @maomaotest
              </p>
            </div>

            {/* テキストエリア */}
            <textarea
              value={content}
              placeholder="今日はES書いた"
              // onChangeで入力値eを監視して、useStateの状態を更新する
              onChange={(e) => setContent(e.target.value)}
              className="w-full pr-8 h-20 bg-transparent focus:bg-transparent border-none focus:border-none outline-none focus:outline-none resize-none text-base text-mint-800 placeholder-mint-400"
            />

            {/* 下部アイテム */}
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center justify-center">
                {/* 画像添付 */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 hover:stroke-blue-500 transition">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                {/* GIF */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
              </div>
              <button className="btn btn-primary">投稿</button>
            </div>
          </div>
        </form>

        {/* 投稿一覧カード */}
        <div className="flex flex-col items-center w-full">

          <div className="flex flex-row items-start justify-start w-full md:w-132 bg-white p-4 border-1 border-gray-100">
            {/* アイコンの部分 */}
            <div className="flex flex-col items-center">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
            </div>

            {/* 右の部分 */}
            <div className="flex flex-col items-start w-full pl-8">
              {/* ユーザーネームとID */}
              <div className="flex flex-row items-center justify-start w-full">
                <p className="text-center text-base font-semibold text-gray-800">
                  まお
                </p>
                <p className="text-center text-sm font-normal text-gray-500">
                  @maomaotest
                </p>
              </div>

              {/* 投稿内容 */}
              <p className="text-start text-base font-normal text-gray-800 w-full pr-8">
                テストテストテストテストテスト
              </p>

              {/* 下部アイテム */}
              <div className="flex flex-row items-center justify-between w-full">

              </div>
            </div>
          </div>

        </div>








      </div>


    </>
  );
}