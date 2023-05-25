let productCount = 0;

// export default async () => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(productCount++);
//         }, 2000);
//     });
//     return {
//         productCount,
//     };
// };

setInterval(() => {
    productCount++;
}, 1000);

export default defineEventHandler(() => {
    return {
        productCount,
    };
});