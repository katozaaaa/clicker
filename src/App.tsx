import { useState } from 'react';

// import classNames from 'classnames';
// import styles from './App.module.scss';

import Playground from './components/Playground/Playground';

function App() {
    const [score, setScore] = useState(0);

    const increaseScore = () => {
        setScore(score + 1);
    }

    return (
        <main>
            <Playground score={score} increaseScore={increaseScore} />
        </main>
    );
}

export default App;
