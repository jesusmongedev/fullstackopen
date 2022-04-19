const Header = (props) => <h1>{props.course.name}</h1>

const Part = (props) => {
  const coursePartsData = props.courseParts
  return (
    <div>
      {coursePartsData.map(({ name, exercises }, index) => (
        <p key={index}>
          {name}: {exercises}
        </p>
      ))}
    </div>
  )
}

const Content = (props) => {
  const courseParts = props.course.parts
  return (
    <>
      <Part courseParts={courseParts} />
    </>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.course.parts
  const { exercises: exercises1 } = part1
  const { exercises: exercises2 } = part2
  const { exercises: exercises3 } = part3
  return (
    <p>Total number of exercises is: {exercises1 + exercises2 + exercises3} </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
