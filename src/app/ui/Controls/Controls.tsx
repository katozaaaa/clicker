export const Controls = () => {
    return () => {
        <div>
            <Control buttonText={'Shop'}>
                <Catalog />
            </Control>
            <Control buttonText={'Menu'}>
                <Menu />
            </Control>
        </div>
    }
}