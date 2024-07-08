import React, { useState } from 'react'
import { Flex, Input, InputNumber, Select, Space, Form, Button } from "antd";

import "./Style.css" 

function CarRegistry() {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [gearbox, setGearbox] = useState('');
    const [milage, setMilage] = useState(0);
    const [body, setBody] = useState('');
    const [price, setPrice] = useState(0.0);
    const [sellerName, setSellerName] = useState(0.0);
    const [phoneNumber, setPhone] = useState(0.0);
    const [year, setYear] = useState(0);
    const [details, setDetails] = useState('');

    const { TextArea } = Input;

    const addCar = () => {
        const car = {make, model, gearbox, milage, body, price, sellerName, phoneNumber, year, details}
        console.log(car);
    }

    return (
        <div className='Entry'>
            <Form>
                <Flex vertical gap={5}>
                    <Input  placeholder='Manufacturer' style={{width: 350,}} onChange={((e) => {setMake(e.target.value)})}/>
                    <Input  placeholder='Model' style={{width: 350,}} onChange={((e) => {setModel(e.target.value)})}/> 
                    <Select placeholder='Gearbox' style={{width: 350,}} 
                        options={[
                            {
                            value: 'Automatic',
                            label: 'Automatic',
                            },
                            {
                            value: 'Manual',
                            label: 'Manual',
                            }
                        ]} onChange={((value) => {setGearbox(value)})}/>
                    <InputNumber  placeholder='Year' style={{width: '40%',}} min={0} max={2024} onChange={((e) => {setYear(e)})}/>
                    <InputNumber  placeholder='Milage (KM)' style={{width: '40%',}} onChange={((e) => {setMilage(e)})}/>
                    <Select placeholder='Body Type' style={{width: 350,}}
                        options={[
                            {
                            value: 'Sedan',
                            label: 'Sedan',
                            },
                            {
                            value: 'Hatchback',
                            label: 'Hatchback',
                            },
                            {
                                value: 'SUV',
                                label: 'SUV',
                            },
                            {
                                value: 'Estate',
                                label: 'Estate',
                            },
                            {
                                value: 'Coupe',
                                label: 'Coupe',
                            },
                            {
                                value: 'Convertible',
                                label: 'Convertible',
                            },
                            {
                                value: 'Truck',
                                label: 'Truck',
                            },
                            {
                                value: 'Motorcycle',
                                label: 'Motorcycle',
                            },
                        ]} onChange={((value) => {setBody(value)})}/>
                    <TextArea rows={4} placeholder="Additional Details" style={{width: 350,}} onChange={((e) => {setDetails(e.target.value)})}> </TextArea>
                    
                    <Space.Compact>
                        <InputNumber addonBefore='$' placeholder='Price' style={{width: '40%',}} onChange={((e) => {setPrice(e)})}/>
                    </Space.Compact>
                    <Input  placeholder='Seller Name' style={{width: 350,}} onChange={((e) => {setSellerName(e.target.value)})}/>
                    <Space.Compact>
                        <InputNumber addonBefore='1876' placeholder='Phone number' style={{width: '40%',}} onChange={((e) => {setPhone(e)})}/>
                    </Space.Compact>
                </Flex>
                <Form.Item>
                <Button type="primary" htmlType="submit" onClick={addCar}>
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CarRegistry