
export default function () {



  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        {/* 背景の波 */}
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-[300px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#f472b6"
              d="M0,160 C480,0 960,320 1440,160 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        {/* メインコンテンツ */}
        <div className="relative z-10 pt-32 flex flex-col items-center">
          {/* アバター */}
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/avatar.jpg" // ここに画像パスを指定
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="mt-4 text-lg font-semibold">Julliet Yirrah</h1>
          <p className="text-sm text-gray-300">View full profile</p>

          {/* ボタンリスト */}
          <div className="mt-6 w-full max-w-sm space-y-4 px-4">
            <button className="w-full py-3 bg-pink-100/10 rounded-md text-left px-4">
              Account Information
            </button>
            <button className="w-full py-3 bg-pink-100/10 rounded-md text-left px-4">
              Password
            </button>
            <button className="w-full py-3 bg-pink-100/10 rounded-md text-left px-4">
              Settings
            </button>
            <button className="w-full py-3 bg-pink-100/10 rounded-md text-left px-4">
              Help & Support
            </button>
            <button className="w-full py-3 bg-pink-600 text-white rounded-md text-left px-4">
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}