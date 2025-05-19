export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Vibe Coding Blog 👋
      </h1>
      <p className="text-gray-600 mb-8">
        프론트엔드 개발자의 성장과 기록을 담는 공간입니다.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">Next.js 15 기반</div>
        <div className="p-4 bg-white rounded shadow">FSD 구조</div>
        <div className="p-4 bg-white rounded shadow">MDX 블로그</div>
      </div>
    </section>
  )
}
