import { defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons";

export const productType = defineType({
    name: "product",
    title: "Product",
    type: "document",
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "title",
            title: "Product Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Product Description",
            type: "string",
        }),
        defineField({
            name: "discount",
            title: "Discount",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "price",
            title: "Product Price",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "brand",
            title: "Brand",
            type: "reference",
            to: [{ type: "brand" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "rating",
            title: "Rating",
            type: "number",
            validation: (Rule) => Rule.required().min(0).max(5),
        }),
        defineField({
            name: "reviews",
            title: "Reviews",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "features",
            title: "Product Features",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "status",
            title: "Product Status",
            type: "string",
            options: {
                list: [
                    { title: "New", value: "new" },
                    { title: "Hot", value: "hot" },
                    { title: "Sale", value: "sale" },
                ],
            }
        }),
        defineField({
            name: "variant",
            title: "Product Type",
            type: "string",
            options: {
                list: [
                    { title: "Gadget", value: "gadget" },
                    { title: "Appliances", value: "appliances" },
                    { title: "Electronics", value: "electronics" },
                    { title: "Fashion", value: "fashion" },
                    { title: "Clothing", value: "clothing" },
                    { title: "Accessories", value: "accessories" },
                    { title: "Footwear", value: "footwear" },
                    { title: "Furniture", value: "furniture" },
                    { title: "Home Decor", value: "homeDecor" },
                    { title: "Kitchenware", value: "kitchenware" },
                    { title: "Toys", value: "toys" },
                    { title: "Sports", value: "sports" },
                    { title: "Health & Beauty", value: "healthBeauty" },
                    { title: "Books", value: "books" },
                    { title: "Stationery", value: "stationery" },
                    { title: "Pet Supplies", value: "petSupplies" },
                    { title: "Jewellery", value: "jewellery" },
                    { title: "Tools", value: "tools" },
                    { title: "Automotive", value: "automotive" },
                    { title: "Refrigerators", value: "refrigerators" },
                    { title: "Best Seller", value: "bestSeller" },
                    { title: "Others", value: "others" },
                ],  
            }
        }),
        defineField({
            name: "isFeatured",
            title: "Is Featured",
            type: "boolean",
            description: "Toggle to feature this product on the homepage",
            initialValue: false,
        }),
        defineField({
            name: "images",
            title: "Product Images",
            type: "array",
            of: [{
                type: "image",
                options: {
                    hotspot: true,
                },
            }],              
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "price",
            media: "images",
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            const image = media && media.length > 0 ? media[0] : undefined;
            return {
                title: title,
                subtitle: subtitle ? `$${subtitle}` : "No price",
                media: image,
            };
        },
    },
});
