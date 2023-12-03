import useSWR from 'swr'
import axios from 'axios'
import {request} from 'graphql-request'

const fetcher = query => request('http://localhost:4000', query)

export const useQUry = query => {
  return useSWR(query,fetcher)
}