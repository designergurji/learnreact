import React, { } from 'react'
import {Container, GirdRow} from '../../globalStyles'
import Img from "../../images/user.jpg"
import {CardSection, Card, CardImg, CardTitle, CardPrice, CardCate, CardDec} from './StoreCardElm'

const StoreCard = ({ dataItems }) => {
    return (
        <>
            <CardSection>
                <Container>
                  
                    <GirdRow>
                        {
                            dataItems.map((items, id) =>
                                <Card key={id}>
                                        <CardImg>
                                        <img src={Img} alt="" />
                                        </CardImg>
                                        <CardTitle> {items.name}</CardTitle>
                                        <GirdRow>
                                            <CardPrice> {items.price}</CardPrice>
                                            <CardCate> {items.Category}</CardCate>
                                        </GirdRow>
                                        <CardDec>{items.dec}</CardDec>
                                </Card>
                            )           
                        }
                    </GirdRow>
                </Container>
            </CardSection>
        </>
    )
}
export default StoreCard;
