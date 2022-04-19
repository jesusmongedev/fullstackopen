const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  const { name: name1, exercises: exercises1 } = part1
  const { name: name2, exercises: exercises2 } = part2
  const { name: name3, exercises: exercises3 } = part3

  return (
    <>
      <Part part1={name1} exercises1={exercises1} />
      <Part part2={name2} exercises2={exercises2} />
      <Part part3={name3} exercises3={exercises3} />
    </>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <p>
      Total number of exercises is:{' '}
      {part1.exercises + part2.exercises + part3.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
