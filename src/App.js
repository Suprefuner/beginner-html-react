import Card from "./components/card/card.component"
import { teamMate } from "./list"

import "./App.css"

export default function App() {
  console.log(teamMate)
  return (
    <div className="container">
      <h1 className="heading--1">team green</h1>
      <section className="section__personal">
        {teamMate.map((person) => (
          <Card {...person} key={person.id} />
        ))}
      </section>
    </div>
  )
}
