Book.destroy_all
Writer.destroy_all
WriterBook.destroy_all

books =[
  {
    title: "Mother; Beautiful Things",
    year: 2017,
    pages: 150,
    price: 5,
    availability: 44,
    description: ""
  },
  {
    title: "Confection",
    year: 2011,
    pages: 200,
    price: 4,
    availability: 0,
    description: ""
  },
  {
    title: "The Artwar Reader",
    year: 2012,
    pages: 300,
    price: 3,
    availability: 10,
    description: ""
  },
  {
    title: "Urgent Film",
    year: 2012,
    pages: 300,
    price: 5,
    availability: 0,
    description: ""
  },
  {
    title: "Al-Dente",
    year: 2014,
    pages: 250,
    price: 6,
    availability: 0,
    description: ""
  },
  {
    title: "Al-Dente",
    year: 2015,
    pages: 250,
    price: 7,
    availability: 0,
    description: ""
  },
  {
    title: "Graft and Corruption: Shakespeare’s Sonnet 15",
    year: 2015,
    pages: 170,
    price: 3,
    availability: 0,
    description: ""
  },
  {
    title: "Graft and Corruption: Shakespeare’s Sonnet 15",
    year: 2015,
    pages: 30,
    price: 5,
    availability: 0,
    description: ""
  },
  {
    title: "Graft and Corruption: Shakespeare’s Sonnet 15",
    year: 2016,
    pages: "",
    price: 6,
    availability: 0,
    description: ""
  },
  {
    title: "Apophthegms",
    year: 2017,
    pages: 500,
    price: 4,
    availability: 0,
    description: ""
  },
  {
    title: "Apophthegms",
    year: 2017,
    pages: "19 (of the 500)",
    price: 3,
    availability: 0,
    description: ""
  },
  {
    title: "Got On",
    year: 2011,
    pages: 200,
    price: 5,
    availability: 0,
    description: ""
  },
  {
    title: "Average Cabin",
    year: 2015,
    pages: 250,
    price: 6,
    availability: 0,
    description: ""
  },
  {
    title: "Average Cabin",
    year: 2015,
    pages: 30,
    price: 4,
    availability: 0,
    description: ""
  },
  {
    title: "Poems (2012-2017)",
    year: 2017,
    pages: 174,
    price: 3,
    availability: 0,
    description: ""
  },
  {
    title: "Poems (2012-2017)",
    year: 2017,
    pages: 24,
    price: 6,
    availability: 0,
    description: ""
  },
  {
    title: "Poems",
    year: 2017,
    pages: 200,
    price: 7,
    availability: 0,
    description: ""
  },
  {
    title: "Nine Plays",
    year: 2014,
    pages: 100,
    price: 7,
    availability: 0,
    description: ""
  },
  {
    title: "New Steps White Kid",
    year: 2017,
    pages: 200,
    price: 5,
    availability: 0,
    description: ""
  },
  {
    title: "Poems",
    year: 2017,
    pages: 200,
    price: 4,
    availability: 0,
    description: ""
  },
  {
    title: "‘Sonatine’",
    year: 2015,
    pages: 70,
    price: 7,
    availability: 0,
    description: ""
  },
  {
    title: "Arcobat",
    year: 2012,
    pages: 200,
    price: 8,
    availability: 0,
    description: ""
  },
  {
    title: "Nettle Range Bladefear",
    year: 2009,
    pages: 60,
    price: 4,
    availability: 0,
    description: ""
  },
  {
    title: "Team You",
    year: 2012,
    pages: 200,
    price: 8,
    availability: 0,
    description: ""
  }
] 

books.each {|book| Book.create(book)}

writers = [

  {
    name: "Anonymous",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Cassels, Imogen",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Dobran, Ryan",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Keen, Jeff",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Prynne, J.H.",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Raworth, Tom",
    biography: "",
    image: "",
    url: ""
  },
 
  {
    name: "Sogumi, Oki",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Spott, Verity",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Stuart, Will",
    biography: "",
    image: "",
    url: ""
  },
 
  {
    name: "Thornton, Timothy",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Tiplady, Jonty",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Toal, Jefferson",
    biography: "",
    image: "",
    url: ""
  },
  {
    name: "Wallace-Hadrill, Mike",
    biography: "",
    image: "",
    url: ""
  }
  
]
writers.each {|writer| Writer.create(writer)}

writer_books = [
  {
    writer_id: 15,
    book_id: 49
  },
  {
    writer_id: 16,
    book_id: 50
  },
  {
    writer_id: 17,
    book_id: 51
  },
  {
    writer_id: 17,
    book_id: 52
  },
  {
    writer_id: 18,
    book_id: 53
  },
  {
    writer_id: 18,
    book_id: 54
  },
  {
    writer_id: 18,
    book_id: 55
  },
  {
    writer_id: 18,
    book_id: 56
  },
  {
    writer_id: 18,
    book_id: 57
  },
  {
    writer_id: 18,
    book_id: 58
  },
  {
    writer_id: 18,
    book_id: 59
  },
  {
    writer_id: 19,
    book_id: 60
  },
  {
    writer_id: 19,
    book_id: 61
  },
  {
    writer_id: 19,
    book_id: 62
  },
  {
    writer_id: 20,
    book_id: 63
  },
  {
    writer_id: 20,
    book_id: 64
  },
  {
    writer_id: 21,
    book_id: 65
  },
  {
    writer_id: 22,
    book_id: 66
  },
  {
    writer_id: 22,
    book_id: 67
  },
  {
    writer_id: 23,
    book_id: 68
  },
  {
    writer_id: 24,
    book_id: 69
  },
  {
    writer_id: 25,
    book_id: 70
  },
  {
    writer_id: 26,
    book_id: 71
  },
  {
    writer_id: 26,
    book_id: 72
  }
]
writer_books.each {|writer_book| 
  w = WriterBook.create(writer_book)
}