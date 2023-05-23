import React from 'react'
import './Suggested.css'

function Suggested() {


    const foods=[
        {
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840775/Zomato/download_rjkest.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Gowtham Daas",
            review:"60 Reviews",
            followers:"1.0K Followers"
        }, {
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840809/Zomato/download_yqkyot.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Thiru Maran",
            review:"60 Reviews",
            followers:"489 Followers"
        }, {
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840825/Zomato/download_aur3tf.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Kumudiny Selvaratnam",
            review:"60 Reviews",
            followers:"504 Followes"
        }, {
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840834/Zomato/download_emu41t.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Adhith.S",
            review:"228 Reviews",
            followers:"656 Followers"
        }, {
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840841/Zomato/download_lapnwn.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Krithika",
            review:"73 Reviews",
            followers:"765 Followers"
        }, {
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840850/Zomato/download_lqqqau.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Vandhana",
            review:"51 Reviews",
            followers:"725 Followers"
        }, {
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840874/Zomato/download_pqgtwz.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"So_Coimbatore",
            review:"35 Reviews",
            followers:"178 Followers"
        },{
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840881/Zomato/download_zeos5y.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Akshay",
            review:"59 Reviews",
            followers:"356 Followers"
        },{
            pic:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684840886/Zomato/download_cfecw1.avif",
            svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="24" height="24" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 fmIpur"><g clip-path="url(#clip0)"><path d="M14.375 14.1667C14.596 14.1667 14.8079 14.0789 14.9642 13.9226C15.1205 13.7663 15.2083 13.5543 15.2083 13.3333C15.2083 11.4417 13.7416 9.76667 11.675 9C12.0527 8.68202 12.3521 8.28135 12.5501 7.82903C12.7481 7.37671 12.8393 6.88489 12.8166 6.39167C12.8166 3.71667 11.3166 2.5 9.16663 2.5C7.01663 2.5 5.51663 3.71667 5.51663 6.39167C5.49499 6.88557 5.58748 7.37782 5.78692 7.83018C5.98637 8.28254 6.2874 8.68284 6.66663 9C4.59997 9.76667 3.1333 11.4417 3.1333 13.3333C3.1333 13.5543 3.2211 13.7663 3.37738 13.9226C3.53366 14.0789 3.74562 14.1667 3.96663 14.1667C4.18765 14.1667 4.39961 14.0789 4.55589 13.9226C4.71217 13.7663 4.79997 13.5543 4.79997 13.3333C4.79997 11.6667 6.84163 10.2083 9.17497 10.2083C11.5083 10.2083 13.5416 11.6667 13.5416 13.3333C13.5416 13.5543 13.6294 13.7663 13.7857 13.9226C13.942 14.0789 14.154 14.1667 14.375 14.1667ZM9.16663 4.16667C10.575 4.16667 11.15 4.80833 11.15 6.39167C11.15 6.81667 11.15 8.125 9.16663 8.125C7.1833 8.125 7.1833 6.81667 7.1833 6.39167C7.1833 4.80833 7.7583 4.16667 9.16663 4.16667Z"></path><path d="M11.6667 16.875H4.16667C3.50363 16.875 2.86774 16.6116 2.3989 16.1428C1.93006 15.6739 1.66667 15.038 1.66667 14.375V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H14.375C15.038 1.66667 15.6739 1.93006 16.1428 2.3989C16.6116 2.86774 16.875 3.50363 16.875 4.16667V11.6667C16.875 11.8877 16.9628 12.0996 17.1191 12.2559C17.2754 12.4122 17.4873 12.5 17.7083 12.5C17.9293 12.5 18.1413 12.4122 18.2976 12.2559C18.4539 12.0996 18.5417 11.8877 18.5417 11.6667V4.16667C18.5417 3.0616 18.1027 2.00179 17.3213 1.22039C16.5399 0.438987 15.4801 0 14.375 0L4.16667 0C3.0616 0 2.00179 0.438987 1.22039 1.22039C0.438987 2.00179 0 3.0616 0 4.16667L0 14.375C0 15.4801 0.438987 16.5399 1.22039 17.3213C2.00179 18.1027 3.0616 18.5417 4.16667 18.5417H11.6667C11.8877 18.5417 12.0996 18.4539 12.2559 18.2976C12.4122 18.1413 12.5 17.9293 12.5 17.7083C12.5 17.4873 12.4122 17.2754 12.2559 17.1191C12.0996 16.9628 11.8877 16.875 11.6667 16.875Z"></path><path d="M19.1668 15.625H17.5002V13.9583C17.5002 13.7373 17.4124 13.5254 17.2561 13.3691C17.0998 13.2128 16.8878 13.125 16.6668 13.125C16.4458 13.125 16.2339 13.2128 16.0776 13.3691C15.9213 13.5254 15.8335 13.7373 15.8335 13.9583V15.625H14.1668C13.9458 15.625 13.7339 15.7128 13.5776 15.8691C13.4213 16.0254 13.3335 16.2373 13.3335 16.4583C13.3335 16.6793 13.4213 16.8913 13.5776 17.0476C13.7339 17.2039 13.9458 17.2917 14.1668 17.2917H15.8335V18.9583C15.8335 19.1793 15.9213 19.3913 16.0776 19.5476C16.2339 19.7039 16.4458 19.7917 16.6668 19.7917C16.8878 19.7917 17.0998 19.7039 17.2561 19.5476C17.4124 19.3913 17.5002 19.1793 17.5002 18.9583V17.2917H19.1668C19.3878 17.2917 19.5998 17.2039 19.7561 17.0476C19.9124 16.8913 20.0002 16.6793 20.0002 16.4583C20.0002 16.2373 19.9124 16.0254 19.7561 15.8691C19.5998 15.7128 19.3878 15.625 19.1668 15.625Z"></path></g><defs><clipPath id="clip0"><rect width="20" height="20"></rect></clipPath></defs></svg>,
            name:"Shaji",
            review:"132 Reviews",
            followers:"401 Followers"
        }
    ]




  return (
    <div>
        <h4 className='left-menu-heading'>Suggested Foodies to follow</h4>
            <div className='suggest-body'>
                {
                    foods.map((item,index)=>{
                        return(

                        <div className='row-div' key={index}>
                            <img className='suggest-img' src={item.pic}></img>
                            <div >
                                <div className='follower-name'>{item.name}</div>
                                <div className='review-followers'>
                                    <div className='reviews-count'>{item.review}</div>
                                    <div className='dot'></div>
                                    <div className='reviews-count'>{item.followers}</div>
                                </div>
                            </div>
                            <div className='suggest-svg'>{item.svg}</div>
                        </div>
                        )
                    })
                }
      
            </div>
    </div>
  )
}

export default Suggested