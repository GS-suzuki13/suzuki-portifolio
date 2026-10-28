export default function Sobre() {
  return (
    <section id="sobre" className="wrap grid grid-cols-1 items-center gap-12 pb-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:pb-28">
      <img
        src="/profile.png"
        alt="Gustavo Suzuki"
        width={600}
        height={600}
        loading="lazy"
        className="aspect-square w-full max-w-sm rounded-[1.5rem] object-cover lg:max-w-none"
      />

      <div>
        <h2 className="titulo text-4xl sm:text-5xl">Sobre mim</h2>
        <div className="mt-6 max-w-texto space-y-4 text-lg text-grafite">
          <p>
            Tenho 25 anos, sou de Blumenau (SC) e trabalho com desenvolvimento de sistemas desde 2021. Comecei em estágios e projetos
            corporativos e hoje construo sistemas completos para pequenos negócios: do banco de dados à tela, com
            publicação e suporte.
          </p>
          <p>
            Gosto de entender o problema antes de escrever código e de entregar algo que as pessoas consigam usar logo.
            Sou comunicativo, competitivo e estou sempre aprendendo alguma tecnologia nova para aplicar na prática.
          </p>
          <p>Fora do computador: skate, futebol, sinuca, os amigos e meus dois cachorros.</p>
        </div>
      </div>
    </section>
  );
}
