import {Col, Form, Input, Row} from "antd";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from "./fields.module.scss"
const FormItems = ({fields}) => {

    return (
        <Row gutter={4}>
            {fields.map((field) => {
                if (field.type === "text") {
                    return (
                        <Col span={field?.col ?? 24} key={field?.name}>
                            <Form.Item
                                key={field?.name}
                                className={styles.formItem}
                                label={field?.label}
                                name={field?.name}
                                rules={[
                                    {
                                        required: field?.required,
                                        message: `Campo ${field?.label} é obrigatório`
                                    }
                                ]}
                                hasFeedback
                                required={!field?.noRequiredMark && field?.required}
                            >
                                <Input
                                    key={field?.name}
                                    size={field?.size}
                                    variant={field?.variant}
                                    prefix={field?.prefix}
                                    suffix={field?.suffix}
                                    placeholder={field?.placeholder}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>
                    )

                }
                if (field.type === "password") {
                    return (
                        <Col span={field?.col ?? 24} key={field?.name}>
                            <Form.Item
                                key={field?.name}
                                className={styles.formItem}
                                label={field?.label}
                                name={field?.name}
                                rules={[
                                    {
                                        required: field?.required,
                                        message: `Campo ${field?.label} é obrigatório`
                                    }
                                ]}
                                hasFeedback
                                required={!field?.noRequiredMark && field?.required}
                            >
                                <Input.Password
                                    key={field?.name}
                                    size={field?.size}
                                    variant={field?.variant}
                                    prefix={field?.prefix}
                                    suffix={field?.suffix}
                                    placeholder={field?.placeholder}
                                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                />

                            </Form.Item>
                        </Col>

                    )
                }
            })}
        </Row>
    )
}
export default FormItems;