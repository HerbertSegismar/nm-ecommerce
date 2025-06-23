import {HomeIcon} from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const addressType = defineType({
    name: "address",
    type: "document",
    title: "Addresses",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "name",
            title: "Address Name",
            type: "string",
            description: "A name for this address, e.g. 'Home', 'Work', etc.",
            validation: (Rule) => Rule.required().max(50)
        }),
        defineField({
            name: "email",
            title: "User Email",
            type: "email",
        }),
        defineField({
            name: "address",
            title: "Street Address",
            type: "string",
            description: "Street address, P.O. box, company name, c/o",
            validation: (Rule) => Rule.required().min(5).max(100)
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "state",
            title: "State",
            type: "string",
            description: "State, province, or region",
            validation: (Rule) => Rule.required().length(2).uppercase()
        }),
        defineField({
            name: "zip",
            title: "Zip Code",
            type: "string",
            description: "Postal code",
            validation: (Rule) => 
                Rule.required()
                .regex(/^\d{5}(-\d{4})?$/, {
                name: 'zipCode',
                invert: false,
            })
            .custom((zip: string | undefined ) => {
                if (!zip) {
                    return "Zip code is required";
                }
                if (!zip.match(/^\d{5}(-\d{4})?$/)) {
                    return "Zip code must be in the format 12345 or 12345-6789";
                }
                return true;
                }),
        }),
        defineField({
            name: "default",
            title: "Default Address",
            type: "boolean",
            initialValue: false,
            description: "Set this address as the default for future orders"
        }),
        defineField({
            name: "createdAt",
            title: "Created At",
            type: "datetime",
            initialValue: ()=> new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "address",
            city: "city",
            state: "state",
            isDefault: "default"
        },
        prepare({ title, subtitle, city, state, isDefault }) {
            return {
                title: `${title} ${isDefault ? "(Default)" : ""}`,
                subtitle: `${subtitle}, ${city}, ${state}`,
            };
        },
    },
})