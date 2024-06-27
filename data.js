const data = {
  products: [
    {
      id: '1',
      title: 'Mock Neck Rib',
      category: 'Top',
      image: ['random14.jpg'],
      price: '49.99',
      countInStock: 4,
      brand: 'Atmos&Here',
      description:
        'Reach your new season fashion goals with the latest from Atmos&Here. From must-have dresses, classic off-duty tees and denim you’ll never want to take off, to of-the-moment footwear and accessories, look to the brand for on-trend pieces in the latest shapes, colours and prints to match any dress code.',
    },
    {
      id: '2',
      title: 'Road Crop Top',
      category: 'Top',
      image: ['random13.jpg'],
      price: '60.00',
      countInStock: 8,
      brand: 'ASICS',
      description:
        'A seamless mix of technical prowess and street-ready design has helped to cement ASICS strive to build their brand through technical quality and pushing the limits. With a seamless blend of form and function, ASICS aims to help professional and recreational athletes reach their peak performance, and enjoy the process.',
    },
    {
      id: '3',
      title: 'Lexa Gathered',
      category: 'Top',
      image: ['random12.jpg'],
      price: '29.99',
      countInStock: 18,
      brand: 'Cotton On',
      description:
        'As Australia’s largest global retailer, Cotton On has become a globally beloved name in everyday urban apparel delivered at an accessible price point. Always on the pulse, clothing and accessories maintain trend-focused while the core collections of reliable staples feature comfortable fits designed to be lived in.',
    },
    {
      id: '4',
      title: 'Drifting Dreams',
      category: 'Top',
      image: ['random11.jpg'],
      price: '69.95',
      countInStock: 24,
      brand: 'MVN',
      description:
        'Made from a stretch mesh fabrication, this MVN Drifting Dreams Top features an off shoulder neckline in an abstract print. Its off shoulder neckline makes it perfect to show off a few of your favourite necklaces.',
    },
    {
      id: '5',
      title: 'Trinity Denim Halter',
      category: 'Top',
      image: ['random10.jpg'],
      price: '59.95',
      countInStock: 16,
      brand: 'Insight',
      description:
        'Insight emerged from a necessity for change, finding its roots in the realms of art, music, pop culture, and a sincere fondness for vintage attire. Originating in the 1990s, it persists as a brand with its own unique identity. Denim takes center stage, boasting a diverse range of options for both men and women. Additionally, the brand offers a notable collection of casual apparel, providing ample choices for those seeking relaxed yet stylish pieces.',
    },
    {
      id: '6',
      title: 'Mock Neck Rib',
      category: 'Top',
      image: ['random1.jpg'],
      price: '49.99',
      countInStock: 4,
      brand: 'Atmos&Here',
      description:
        'Reach your new season fashion goals with the latest from Atmos&Here. From must-have dresses, classic off-duty tees and denim you’ll never want to take off, to of-the-moment footwear and accessories, look to the brand for on-trend pieces in the latest shapes, colours and prints to match any dress code.',
    },
    {
      id: '7',
      title: 'Road Crop Top',
      category: 'Top',
      image: ['random2.jpg'],
      price: '60.00',
      countInStock: 8,
      brand: 'ASICS',
      description:
        'A seamless mix of technical prowess and street-ready design has helped to cement ASICS strive to build their brand through technical quality and pushing the limits. With a seamless blend of form and function, ASICS aims to help professional and recreational athletes reach their peak performance, and enjoy the process.',
    },
    {
      id: '8',
      title: 'Lexa Gathered',
      category: 'Top',
      image: ['random3.jpg'],
      price: '29.99',
      countInStock: 18,
      brand: 'Cotton On',
      description:
        'As Australia’s largest global retailer, Cotton On has become a globally beloved name in everyday urban apparel delivered at an accessible price point. Always on the pulse, clothing and accessories maintain trend-focused while the core collections of reliable staples feature comfortable fits designed to be lived in.',
    },
    {
      id: '9',
      title: 'Drifting Dreams',
      category: 'Top',
      image: ['random4.jpg'],
      price: '69.95',
      countInStock: 24,
      brand: 'MVN',
      description:
        'Made from a stretch mesh fabrication, this MVN Drifting Dreams Top features an off shoulder neckline in an abstract print. Its off shoulder neckline makes it perfect to show off a few of your favourite necklaces.',
    },
    {
      id: '10',
      title: 'Trinity Denim Halter',
      category: 'Top',
      image: ['random5.jpg'],
      price: '59.95',
      countInStock: 16,
      brand: 'Insight',
      description:
        'Insight emerged from a necessity for change, finding its roots in the realms of art, music, pop culture, and a sincere fondness for vintage attire. Originating in the 1990s, it persists as a brand with its own unique identity. Denim takes center stage, boasting a diverse range of options for both men and women. Additionally, the brand offers a notable collection of casual apparel, providing ample choices for those seeking relaxed yet stylish pieces.',
    },
    {
      id: '11',
      title: 'Mock Neck Rib',
      category: 'Top',
      image: ['random6.jpg'],
      price: '49.99',
      countInStock: 4,
      brand: 'Atmos&Here',
      description:
        'Reach your new season fashion goals with the latest from Atmos&Here. From must-have dresses, classic off-duty tees and denim you’ll never want to take off, to of-the-moment footwear and accessories, look to the brand for on-trend pieces in the latest shapes, colours and prints to match any dress code.',
    },
    {
      id: '12',
      title: 'Road Crop Top',
      category: 'Top',
      image: ['random7.jpg'],
      price: '60.00',
      countInStock: 8,
      brand: 'ASICS',
      description:
        'A seamless mix of technical prowess and street-ready design has helped to cement ASICS strive to build their brand through technical quality and pushing the limits. With a seamless blend of form and function, ASICS aims to help professional and recreational athletes reach their peak performance, and enjoy the process.',
    },
    {
      id: '13',
      title: 'Lexa Gathered',
      category: 'Top',
      image: ['random8.jpg'],
      price: '29.99',
      countInStock: 18,
      brand: 'Cotton On',
      description:
        'As Australia’s largest global retailer, Cotton On has become a globally beloved name in everyday urban apparel delivered at an accessible price point. Always on the pulse, clothing and accessories maintain trend-focused while the core collections of reliable staples feature comfortable fits designed to be lived in.',
    },
    {
      id: '14',
      title: 'Trinity Denim Halter',
      category: 'Top',
      image: ['random9.jpg'],
      price: '59.95',
      countInStock: 16,
      brand: 'Insight',
      description:
        'Insight emerged from a necessity for change, finding its roots in the realms of art, music, pop culture, and a sincere fondness for vintage attire. Originating in the 1990s, it persists as a brand with its own unique identity. Denim takes center stage, boasting a diverse range of options for both men and women. Additionally, the brand offers a notable collection of casual apparel, providing ample choices for those seeking relaxed yet stylish pieces.',
    },
  ],
};

export default data;
