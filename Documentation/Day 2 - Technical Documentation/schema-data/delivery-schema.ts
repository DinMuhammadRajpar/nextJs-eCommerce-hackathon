export default {
    name: 'deliveryZone',
    title: 'Delivery Zone',
    type: 'document',
    fields: [
      {
        name: 'zoneName',
        title: 'Zone Name',
        type: 'string',
      },
      {
        name: 'zipCodes',
        title: 'Supported Zip Codes',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'deliveryFee',
        title: 'Delivery Fee',
        type: 'number',
      },
      {
        name: 'estimatedDeliveryTime',
        title: 'Estimated Delivery Time',
        type: 'string',
      },
    ],
  };
  