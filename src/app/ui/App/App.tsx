import { CoinsProvider } from "../../../shared";
import { AppStateProvider } from "../AppStateProvider/AppStateProvider";
import '../../../shared/styles/index.scss';

export const App = () => {
    return (
        <main>
            <CoinsProvider>
                <AppStateProvider />
            </CoinsProvider>
        </main>
    )
}