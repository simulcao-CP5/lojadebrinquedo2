import BrinquedoCard from '../components/BrinquedoCard';
import BrinquedoImg from '../assets/brinquedo.jpg';

const Home = () => {
  const brinquedos = [
    { id: 1, titulo: "Brinquedo-01", preco: "R$ 400,00", imagem: BrinquedoImg },
    { id: 2, titulo: "Brinquedo-02", preco: "R$ 350,00", imagem: BrinquedoImg },
    { id: 3, titulo: "Brinquedo-03", preco: "R$ 250,00", imagem: BrinquedoImg },
    { id: 4, titulo: "Brinquedo-04", preco: "R$ 200,00", imagem: BrinquedoImg },
    { id: 5, titulo: "Brinquedo-05", preco: "R$ 250,00", imagem: BrinquedoImg },
    { id: 6, titulo: "Brinquedo-06", preco: "R$ 200,00", imagem: BrinquedoImg },
    { id: 7, titulo: "Brinquedo-07", preco: "R$ 450,00", imagem: BrinquedoImg },
    { id: 8, titulo: "Brinquedo-08", preco: "R$ 130,00", imagem: BrinquedoImg },
  ];

  return (
    <main className="container mx-auto px-4 mt-10 mb-16 flex-grow">
      <h2 className="titulo text-3xl mb-6">Produtos em Destaque</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {brinquedos.map((brinquedo) => (
          <BrinquedoCard
            key={brinquedo.id}
            titulo={brinquedo.titulo}
            preco={brinquedo.preco}
            imagem={brinquedo.imagem}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;