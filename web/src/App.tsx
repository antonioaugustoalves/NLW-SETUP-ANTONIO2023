import { Header } from "./components/Header";
import { SummaryTable } from "./components/SummaryTable";
import "./styles/globals.css";





function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
       <Header/>
       <SummaryTable/>
      </div>
    </div>
  )
}

export { App }

// continua a partir de 1h 11m 00s
