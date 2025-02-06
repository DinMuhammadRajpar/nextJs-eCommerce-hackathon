export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Furniture', value: 'furniture' },
            { title: 'Homeware', value: 'homeware' },
          ],
        },
      },
      {
        name: 'stock',
        title: 'Stock',
        type: 'number',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'dimensions',
        title: 'Dimensions (L x W x H)',
        type: 'string',
      },
      {
        name: 'weight',
        title: 'Weight (kg)',
        type: 'number',
      },
      {
        name: 'material',
        title: 'Material',
        type: 'string',
      },
    ],
  };
  