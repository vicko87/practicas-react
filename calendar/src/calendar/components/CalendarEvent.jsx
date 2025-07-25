

export const CalendarEvent = ({event}) => {

    if (!event) return null;

  const { title = 'Sin título', user } = event;


  return (
    <>
    <strong>{title}</strong>
    <span> - {user?.name || 'Sin usuario'}</span>
    </>
  )
}
