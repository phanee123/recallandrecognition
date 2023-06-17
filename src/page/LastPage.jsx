import "../App.css";

const lastPageStyles = {
  container: {
    margin: "auto",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    minHeight: "60vh",
    justifyContent: "center",
    gap: "25px",
  },
  bottomArea: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  footer: {
    textAlign: "center",
  },
};

const heading = {
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "3rem",
  },
  underline: {
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
};

const LastPage = () => {
  return (
    <div style={heading.heading}>
      <div style={lastPageStyles.container}>
        <p>
          Table-1:Showing results for number of words recalled and recognized by
          the subject during the experiment
        </p>
        <table>
          <thead>
            <tr>
              <th colSpan={3}>No. of correct responses</th>
            </tr>
            <tr>
              <th>Recall </th>
              <th>Recognition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div style={lastPageStyles.bottomArea}>
          <h4>Discussion:</h4>
          <p style={heading.underline}>
            Discuss weather recall is better that recognition or vice-versa for
            words.
          </p>
          <h4>Conclusion:</h4>
          <p style={heading.underline}>
            Demonstrated the phenomena of recall and recognition to understand
            weather recognition is better or recall for words.
          </p>
          <h4>Practical Application:</h4>
          <p style={heading.underline}>
            You will have to identify 2 conditions where you recall stimuli and
            2 condition where you recognize stimuli in your day-to-day life.
          </p>
        </div>
        <footer>
          <h5 style={lastPageStyles.footer}>
            .....*End of the Experiment*.....
          </h5>
        </footer>
      </div>
    </div>
  );
};

export default LastPage;
