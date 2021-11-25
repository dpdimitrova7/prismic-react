import Prismic from '@prismicio/client'

const apiEndpoint = 'https://jyre-engineering-recruitment.prismic.io/api/v2'
const accessToken = 'MC5ZWmZRVEJJQUFDMEF4QmVF.Me-_vUfvv71QJAoT77-9Pe-_ve-_vXLvv71j77-977-9TTzvv73vv73vv73vv73vv70OXhFpdlDvv73vv70'

export const client = Prismic.client(apiEndpoint, { accessToken });