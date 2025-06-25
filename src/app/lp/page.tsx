import Image from "next/image";
import Mydropdown from "@/components/ui/header/dropdown";
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* 大枠のVStack */}
      <div className="flex flex-col items-center space-y-4 w-screen h-screen">

        <header className="flex flex-row justify-between w-full shadow-md p-2">
          {/* 中心h */}
          <div className="flex flex-row items-center justify-center bg-white">
            {/* アプリのアイコン画像 */}
            <Image
              src="/logo.png"
              alt="ロゴ画像"
              width={40}
              height={40}
              className=""
            />
            {/* アプリ名 */}
            <p className="text-center text-base font-normal text-gray-800">
              ESNOONとは
            </p>
          </div>

          {/* 右側h */}
          <div className="flex flex-row items-center justify-center">
            <Mydropdown
              title="このアプリの特徴"
              ItemName={["説明１", "説明２"]}
            />
            <Mydropdown
              title="法人の方へ"
              ItemName={["説明１", "説明２"]}
            />
            <Mydropdown
              title="学生の方へ"
              ItemName={["説明１", "説明２"]}
            />

            {/* 新規登録orログイン */}
            <div className="flex flex-row items-center justify-center">
              <Link href="/signup" className="btn btn-primary">
                新規登録
              </Link>
              <Link href="login" className="btn btn-primary">
                ログイン
              </Link>
            </div>
          </div>
        </header>

        <body className="flex flex-col items-center w-full h-full">
          <div className="flex flex-col items-center w-full">
            {/* 背景画像 */}
            <div className="relative w-full max-w-2xl aspect-video">
              <Image
                src="/gakusei.jpg"
                alt="学生画像"
                fill
                className="object-cover rounded-md shadow-md"
              />
            </div>
            {/* 説明 */}
            <p className="text-center text-2xl font-bold text-gray-800">
              ES〇〇とは？
            </p>

            <p className="text-center text-base font-normal text-gray-800">
              ES〇〇は、学生と企業をつなぐ新しい形のSNSアプリです。あなたの未来をここからスタート！
            </p>
          </div>






        </body>

        <footer className="text-center text-sm text-gray-700 w-full py-4">
          &copy; 2025 ES〇〇. All rights reserved.
        </footer>
        
      </div>

    </>
  );
}