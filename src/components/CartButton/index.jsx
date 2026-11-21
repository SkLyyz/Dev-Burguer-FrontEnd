import CartImage from '../../assets/Vector.svg'
import { ContainerButton } from './styles'

export function CartButton({ ...props }) {
    return (
        <ContainerButton {...props}>
            <img src={CartImage} alt="Cart" />
        </ContainerButton>
    )
}