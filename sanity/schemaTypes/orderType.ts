import { defineArrayMember, defineField, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";


export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "invoice",
      type: "object",
      fields: [
        { name: "name", type: "string" },
        { name: "number", type: "string" },
        { name: "hosted_invoice_url", type: "url" },
      ],
    }),
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    }),
    defineField({
      name: "items",
      title: "Order Items",
      description: "List of products in the order",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "product" }],
            }),
            defineField({
              name: "quantity",
              title: "Quantity purchased",
              type: "number",
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
              currency: "product.currency",
            },
            prepare(select) {
              return {
                title: `${select.product} (x${select.quantity})`,
                media: select.image,
                subtitle: `${select.quantity * select.price}`,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "createdAt",
      title: "Order Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shippingAddress",
      title: "Shipping Address",
      type: "object",
      fields: [
        { name: "firstName", type: "string" },
        { name: "lastName", type: "string" },
        { name: "addressLine1", type: "string" },
        { name: "addressLine2", type: "string" },
        { name: "city", type: "string" },
        { name: "state", type: "string" },
        { name: "postalCode", type: "string" },
        { name: "country", type: "string" },
      ],
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivering", value: "delivering" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({
      name: "shippingMethod",
      title: "Shipping Method",
      type: "string",
      options: {
        list: [
          { title: "Standard Shipping", value: "standard" },
          { title: "Express Shipping", value: "express" },
          { title: "Overnight Shipping", value: "overnight" },
        ],
      },
      initialValue: "standard",
    }),
    defineField({
      name: "trackingNumber",
      title: "Tracking Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "trackingUrl",
      title: "Tracking URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "notes",
      title: "Order Notes",
      type: "text",
      description: "Any additional notes or instructions for the order",
    }),
    defineField({
      name: "orderdate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
    preview: {
        select: {
        name: "customerName",   
        orderId: "orderNumber",
        items: "items",
        amount: "totalPrice",
        currency: "currency",
        media: "items.0.product.image",
        email: "email",
        },
        prepare(select) {
            const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return {
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.amount} ${select.currency},  ${select.email}`,
                media: BasketIcon,
            };
        },
    },
});