import { Card, Form, Input, Button } from "./form";

const LoginForm = () => {
  return (
    <Card>
      <Form id="form">
        <Input type="text" name="username" id="name" />
        <Input type="text" name="password" id="password" />
        <Button type="submit" form="form">
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default LoginForm;
