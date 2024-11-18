import "./ticketCard.css";
const TicketCard = ({ ticket }) => {
  const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="ticket-card">
      <p className="ticket-id">{ticket.id}</p>
      <p className="ticket-title">{ticket.title}</p>
     <div className="ticket-tags-container">
     <p className="tag-image"> --- </p>
     {ticket?.tag?.map((tag) => (
        <div className="ticket-tag-container">
          <div className="circle">{` `}</div>
          <p className="ticket-tag">{tag}</p>
        </div>
      ))}
     </div>
    </div>
  );
};

export default TicketCard;
