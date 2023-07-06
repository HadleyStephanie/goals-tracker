import { useEffect, useState } from "react";

const initialGoals = [
  { description: "eat more greens", id: 1 },
  { description: "learn node.js", id: 2 },
];

const completedGoals = [
  { description: "change eating habits", id: 3 },
  { description: "start walking everyday", id: 4 },
];

export default function App() {
  const [goals, setGoals] = useState(initialGoals);

  function handleAddGoals(goal) {
    setGoals((goal) => [...goals, goal]);
  }
  return (
    <div>
      <h1>Goal Tracker</h1>
      <div className="app">
        <AddGoalsForm onAddGoals={handleAddGoals} />
        <GoalsList />
        <CompletedGoalsList />
      </div>
    </div>
  );
}

function AddGoalsForm({ onAddGoals }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newGoal = { description, id: crypto.randomUUID() };

    onAddGoals(newGoal);

    // description("");
    // setDescription("");
  }

  return (
    <div className="form">
      <form onChange={handleSubmit}>
        <label>What goal would you like to accomplish?</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </form>
      <button className="btn">Add Goal</button>
    </div>
  );
}

function GoalsList() {
  return (
    <div className="goals-list">
      <h3>Goals</h3>
      <ul>
        {initialGoals.map((g) => (
          <li key={g.id}>{g.description}</li>
        ))}
      </ul>
    </div>
  );
}

// function Goal() {
//   return (
//     <div>
//       <li></li>
//     </div>
//   );
// }

function CompletedGoalsList() {
  return (
    <div className="completed-goals">
      <h3>Completed Goals</h3>
      <ul>
        {completedGoals.map((c) => (
          <li key={c.id}>{c.description}</li>
        ))}
      </ul>
    </div>
  );
}
