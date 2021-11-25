
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded'
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const items = [
    {
        href: '/category',
        icon: CategoryRoundedIcon,
        title: 'Categorias'
    },
    {
        href: '/brand',
        icon: LocalOfferRoundedIcon,
        title: 'Marcas'
    },
    {
        href: '/product',
        icon: LocalMallIcon,
        title: 'Produtos'
    },
    {
        href: '/order',
        icon: ReceiptIcon,
        title: 'Pedidos'
    },
    {
        href: '/user',
        icon: AccountCircleIcon,
        title: 'Usuários'
    }
];