type PurchaseProducer = (
    id, 
    producers, 
    dispatchProducer
) => void;

export const purchaseProducer = (id, producers, dispatchProducer) => {
    const isInProducers = producers.some((producer) => {
        return producer.id === id;
    });

    dispatchProducer({
        type: isInProducers ? 'increased' : 'added',
        id: id
    });
}