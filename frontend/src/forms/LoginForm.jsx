import { Form, Input, Checkbox } from 'antd';
export default function LoginForm() {
  return (
    <>
      <Form>
        <Input placeholder="email" />
      </Form>
      <Form>
        <Input placeholder="password" />
      </Form>
    </>
  );
}
