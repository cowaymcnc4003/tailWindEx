import './App.css'

function App() {
  return (
      <div className="flex min-h-full min-w-full flex-1 flex-col justify-center">
        <header className="bg-gray-300 shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">날짜 선택</h1>
          </div>
        </header>
        <div className="mx-auto mt-10 mr-10 ml-10 flex bg-gray-300 flex-col justify-center rounded-md">
          <div className="mx-auto px-5 py-3 text-lg">
            <button className='px-3 py-3 bg-neutral-400 font-bold rounded-l-lg' >{'<'}</button>
            <button className='px-5 py-3 bg-gray-200 font-bold'> 2024.08.12 </button>
            <button className='px-3 py-3 bg-neutral-400 font-bold rounded-r-lg'>{'>'}</button>
          </div>
          <div className="bg-gray-300 mr-10 ml-10 flex flex-wrap">
            <div className="mr-5 ml-5 mb-5 mt-5 bg-gray-200 pt-4 text-center rounded-md">
              <div className="mb-2" ><span className='font-bold'>08.01 ~ 08.02</span></div>
              <div className="mb-2 max-w-xs break-words"><span className='font-sans'>라이 짬뽕</span></div>
              <div>
                <button className='bg-blue-300 w-20 rounded-bl-lg ' >수정</button>
                <button className='bg-gray-400 w-20 rounded-br-lg'>삭제</button>
              </div>
            </div>

          </div>
          <div className="mx-auto px-6 py-5">
            <button className='bg-blue-400 h-10 w-40 rounded-md text-white'>추가</button>
          </div>
        </div>
      </div>
  )
}

export default App
