import { types } from '../types';

export const initState = {
  products: [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',

    },
    {
      id: 5,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    }
  ],
  
    one: {

  },


  //* In donations will be donation criterias
  donations:[
    
  ],
  
  paymentSummary:[
    
    
  ],
  news:[
    
  ],
  posts:[
    
  ],
  events: [
    
  ],
  admins: [
    
  ],
  admin: {
    username: 'username',
    email: 'email',
  }
}


export const reducers = (state = initState, action) => {
  switch (action.type) {
      case types.DELETE: 
      return;
      case types.NEWS:
        return {...state, news: action.payload};
        case types.POSTS:
          return {...state, posts: action.payload};
          case types.EVENTS:
            return {...state, events: action.payload};
            case types.ADMINS:
              return {...state, admins: action.payload};

      case types.ONE:
        return {...state, one: action.payload}


      case 'LOAD_DONATIONS':
        const donationData = action.payload;

        return {...state, donations:donationData}

      case 'DONATE_SUM':
        const imgLink = action.payload.imgLink
        const title = action.payload.title
        const donationTotalPercentage = action.payload.donationTotalPercentage
        const donationAmount = action.payload.donationAmount
        return {...state, paymentSummary:{imgLink, title, donationTotalPercentage, donationAmount}}
      
      default:
          return state;

  }
}
