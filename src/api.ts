const express = require('express');
import { Request, Response } from 'express';

// Express uygulamasını oluştur
const app = express();

// Route handler'ı
app.get('/', (req: Request, res: Response) => {
    const body:string = req.body;
    res.send('Merhaba Dünya!');
    body 
});

// Uygulamayı belirtilen portta dinle
app.listen(3000, () => {
  console.log('Uygulama 3000 numaralı portta çalışıyor! http://localhost:3000');
});


