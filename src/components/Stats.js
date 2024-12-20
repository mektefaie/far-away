export default function Stats(props) {
  if (!props.items.length)
    return (
      <p className='stats'>
        <em>You better start packing ...</em>
      </p>
    )

  const numItems = props.items.length
  const numPacked = props.items.filter(item => item.packed).length
  const percentage = Math.round((numPacked / numItems) * 100)

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? `You are now ready to for your trip ✈️`
          : `🎒 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  )
}
