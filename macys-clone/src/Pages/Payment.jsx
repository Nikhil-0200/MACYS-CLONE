import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text
  } from '@chakra-ui/react';

  import { useDisclosure } from "@chakra-ui/react";
  import React from "react";



const Payment = ()=>{
    const navigate = useNavigate()

    const location = useLocation();

    const {totalSum} = location.state || {};
  
    console.log(location.state)

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )

      const { isOpen, onOpen, onClose } = useDisclosure()
const [overlay, setOverlay] = React.useState(<OverlayOne />)



const SendToHomePage = ()=>{
    navigate("/women")
}

    return(
    <section className="font-macys-light">
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader></ModalHeader>
          <Link to="/">
          <ModalCloseButton 
          onClick={SendToHomePage}
          />
          </Link>
          <ModalBody>
            <Text className="text-center flex flex-col gap-6">
                <h1 className="font-macys-bold uppercase text-red-500 text-xl py-3">congratulation</h1>
                <h1 className="font-macys-light uppercase text-black text-lg">Your Order Has Been Placed</h1></Text>
          </ModalBody>
          <ModalFooter>
            <Button  onClick={SendToHomePage}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <div>
            <h1 className="text-3xl py-2">Payment Page</h1>
        </div>
        <MDBContainer
      className="py-5"
      fluid
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
      }}
    >
      <MDBRow className=" d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="5">
          <MDBCard className="rounded-3">
            <MDBCardBody className="p-4">
              <div className="text-center mb-4">
                <h3>Total: ${totalSum}</h3>
              </div>
              <p className="fw-bold mb-4 pb-2">Saved cards:</p>
              <div className="d-flex flex-row align-items-center mb-4 pb-1">
                <img
                  className="img-fluid"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                />
                <div className="flex-fill mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="lg"
                      value="**** **** **** 4296"
                    />
                  </div>
                </div>
                <a href="#!">Remove card</a>
              </div>
              <p className="fw-bold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="lg"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="lg"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="password"
                    size="lg"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="password"
                    size="lg"
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }} color="success" size="lg" block>
                Pay Amount
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </section>
    )
}

export default Payment