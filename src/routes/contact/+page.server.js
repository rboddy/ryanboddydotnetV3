// Install with: npm install @trycourier/courier
import { CourierClient } from "@trycourier/courier";
import { env as private_env } from '$env/dynamic/private'

// const courier = CourierClient({ authorizationToken: private_env.COURIER_API });

export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();

        console.log(form);

        let message = `Message: ${form.get('message')}\n Sent by: ${form.get('name')}\n Email: ${form.get('email')}`

        console.log(message);

        // const { requestId } = await courier.send({
        //   message: {
        //     to: {
        //       data: {
        //         name: "Ryan Boddy",
        //       },
        //       email: "avidryanb@gmail.com",
        //     },
        //     content: {
        //       title: "Email from Website",
        //       body: message,
        //     },
        //     routing: {
        //       method: "single",
        //       channels: ["email"],
        //     },
        //   },
        // });
    }
}