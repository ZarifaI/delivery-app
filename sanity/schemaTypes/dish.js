import {defineField, defineType} from 'sanity'

export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [{
    name: "name",
    type: "string",
    title: "Name of the dish",
    validation: (Rule) => Rule.required(),
},
{
  name: "shortdescripion",
  type: "string",
  title: "Short Description",
  validation: (Rule) => Rule.max(200),
},
{
  name: "price",
  type: "number",
  title: "Price of the dish in GBP",
},
{
  name: "image",
  type: "image",
  title: "Image of the Dish",
},
]
}
