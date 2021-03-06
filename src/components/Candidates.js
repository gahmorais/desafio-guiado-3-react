import React from "react";
import Candidate from "./Candidate";
import Card from "./Card";
import FlipMove from 'react-flip-move'

export default function Candidates({ candidates }) {
  return (
    <div>
      <FlipMove>
        {candidates.map((candidate, index) => {
          const { id } = candidate;
          return (
            <Card key={id}>
              <Candidate candidate={candidate} position={index + 1} />
            </Card>
          );
        })}
      </FlipMove>
    </div>
  );
}
