"use client"
import Button from "@/components/tokens/button";
import {useRouter} from "next/navigation";
import ListComponent from "@/components/components/listComponent";

export default function Dashboard(){
    const router = useRouter()
    function goToDashboard(){
        router.push("/")
    }
    const data = [
        {
            id:1,
            name:"item 1",
        },
        {
            id:2,
            name:"item 2",
        },
        {
            id: 3,
            name: "item 3",
        },
        {
            id:4,
            name:"item 4",
        },
        {
            id:5,
            name:"item 5",
        },
    ]
    return (
        <>
            <div className="container mt-7">
                <Button className={"btn btn-primary"} typeName={"button"} name={"Primary"}
                        handler={() => alert("Primary")}/>
                <Button className={"btn btn-info"} typeName={"button"} name={"Info"} handler={goToDashboard}/>
                <Button className={"btn btn-success"} typeName={"button"} name={"Success"}/>
                <Button className={"btn btn-warning"} typeName={"button"} name={"Warning"}/>
                <Button className={"btn btn-danger"} typeName={"button"} name={"Danger"}/>
            </div>
            <div className="container mt-7 border-2">
                <ListComponent list={data}/>
            </div>

            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum maiores nulla tenetur. Accusamus, accusantium asperiores doloribus eius fugiat, fugit illo incidunt ipsum laudantium maxime porro rem repudiandae soluta suscipit.</span>
                <span>Deleniti est facilis laborum libero molestias, quia? Animi autem debitis deleniti, dignissimos doloremque ea eaque facere, id inventore ipsa laudantium nesciunt nulla obcaecati placeat praesentium quia reprehenderit suscipit voluptate. Voluptatum.</span>
                <span>Ab amet atque, consectetur distinctio esse impedit itaque officia optio, provident quam reprehenderit sapiente. Accusamus assumenda corporis dolore eius et incidunt libero nostrum officia placeat, quaerat quasi quisquam temporibus vitae?</span>
                <span>Alias aliquam animi cum, delectus deleniti doloremque ducimus ex excepturi hic id illo in ipsum libero magni modi necessitatibus nihil non nulla optio porro quaerat repellendus reprehenderit sed voluptas voluptate?</span>
                <span>Alias aliquid aperiam at consequatur et, exercitationem illum labore magni maxime modi necessitatibus nulla pariatur quos vel, velit? Delectus fugiat non officiis placeat porro quibusdam quod, rem sapiente voluptate? Voluptate.</span>
                <span>Ab accusantium, aliquam at eos eveniet ex qui quo repellat tenetur voluptatibus? Doloremque eveniet excepturi ipsam, itaque maxime minima, modi molestias neque odit placeat quae unde? Ab neque possimus quia?</span>
                <span>Alias, aliquid aut autem dolor dolorem earum eligendi eos error explicabo illum inventore labore laborum modi mollitia numquam possimus quae quibusdam quo recusandae, sequi similique sint temporibus totam velit vitae.</span>
                <span>Accusamus dolor nobis perferendis placeat possimus quaerat, rem suscipit voluptatem. Accusamus alias cupiditate eius illum nulla quae quidem similique unde? Accusamus aliquam expedita fuga iusto laboriosam officia perspiciatis sint velit.</span><span>Commodi harum magnam nemo soluta? A amet aspernatur assumenda consequatur dignissimos earum est ipsum laudantium mollitia nulla odit perferendis quae, quod repellat repellendus reprehenderit temporibus totam, ut vel velit vero!</span>
                <span>A, adipisci asperiores at cupiditate delectus, distinctio illum impedit, laudantium magnam maxime molestias odit optio pariatur qui quis quisquam quod. Atque iure iusto laboriosam minus, nesciunt pariatur perspiciatis rem repellat!</span>
                <span>Ab, accusamus ad aperiam at atque, beatae blanditiis corporis dignissimos dolore et ex fugiat id illum in iste libero mollitia nostrum obcaecati quaerat qui quibusdam ratione repellat tempora vero, voluptatem?</span>
                <span>Beatae dolor est impedit officia quam temporibus velit. Accusamus alias asperiores consequatur culpa delectus dignissimos hic, id iste natus nisi perferendis, quisquam quo quos ratione repellat sed soluta temporibus velit.</span>
                <span>A ad adipisci commodi culpa debitis dignissimos enim eos exercitationem id in incidunt ipsa itaque iure laborum maxime modi molestias odio officia optio perferendis quae quibusdam quis, saepe sed voluptas?</span>
                <span>Accusamus accusantium animi assumenda atque corporis culpa, deserunt doloribus dolorum expedita illum, incidunt labore modi molestias, nam nihil odio officiis provident quaerat quasi quos recusandae reiciendis rerum saepe tempore veniam?</span>
                <span>Accusamus alias asperiores autem, debitis dignissimos, eligendi eos exercitationem expedita facere illo iste iusto mollitia nisi numquam officia quaerat quo reiciendis repellat sint soluta sunt suscipit ut vero voluptas voluptatibus.</span>
                <span>Ab adipisci aliquid autem consequuntur corporis culpa, cupiditate, doloremque dolorum ea eius eum excepturi expedita facere fugiat in laboriosam magnam maiores minus, nemo neque nobis quasi sed tenetur ullam vel!</span>
                <span>Amet aperiam aspernatur consequatur cupiditate distinctio dolores eos error ex expedita hic illo inventore, iusto, laboriosam modi neque nihil nulla omnis possimus, quis rerum soluta totam veniam voluptas voluptates voluptatum.</span>
                <span>Alias culpa eaque iste iusto, quae quaerat voluptatem. Aspernatur eligendi in libero nostrum obcaecati quia? Amet aut consequuntur dolorem, esse fugit hic minus nisi pariatur quidem quis reiciendis saepe voluptas!</span>
                <span>Aliquid atque corporis cupiditate dignissimos doloremque dolores earum facilis illum impedit incidunt inventore iure nemo non, odio omnis recusandae repellat sequi, sit temporibus tenetur. Dolores ipsum magni necessitatibus repudiandae suscipit.</span>
                <span>Aliquid animi aut beatae corporis deserunt dolor doloremque et excepturi incidunt, laudantium, magnam modi, odit quas quia ratione sit ut veniam. Accusantium aperiam deleniti dolorem dolores illo impedit neque quam!</span>
                <span>Accusamus aliquam eaque eius est eveniet nemo numquam officia officiis perspiciatis quam quas recusandae similique sint soluta, totam unde voluptatum. Amet autem beatae dolores impedit maxime modi nobis ratione repellat?</span>
                <span>Ad aut earum eius illum mollitia, nisi quisquam repellendus! Corporis eligendi eveniet facilis impedit, iste necessitatibus voluptate? Architecto, dolorem, eaque enim impedit itaque magni nam nihil optio similique sit vero.</span>
                <span>Culpa id ipsum nemo odit, omnis praesentium sit. Aliquam aspernatur at consequatur culpa cumque dolor dolore ea, inventore minus, numquam, obcaecati odio provident quis quo quos repudiandae sint veritatis voluptas.</span>
                <span>Impedit incidunt iusto perspiciatis quam quasi. Eaque, fugit, quod. Ab architecto asperiores beatae dolorem dolores dolorum earum, esse et eveniet excepturi ipsum maxime minus nostrum quia ratione tempora unde voluptatibus.</span>
                <span>Ad adipisci aperiam atque cupiditate deleniti, doloribus in iusto magnam maiores minima mollitia nam non officia, provident quibusdam quod recusandae rem saepe tenetur unde vel voluptate voluptates voluptatum! Eum, officiis!</span>
                <span>Accusamus amet atque culpa eos, suscipit ullam voluptatibus! Aspernatur assumenda corporis eius est ex facilis odit quod suscipit vel? Animi aperiam atque dolore id libero magnam nemo, numquam pariatur quae?</span>
                <span>Adipisci maxime molestias nostrum praesentium quo sit tenetur. Accusantium architecto cupiditate eius esse est exercitationem facilis harum id minima molestiae neque nihil officiis porro possimus quaerat reiciendis sit tenetur, voluptatem?</span>
                <span>Adipisci amet cum esse iusto nihil officia officiis quis repellat reprehenderit vitae. Amet cum doloremque fugiat inventore iure modi, nam, nemo nisi perferendis porro quia recusandae unde ut vero voluptates?</span>
                <span>Accusantium aliquam architecto asperiores at consequuntur doloremque dolores doloribus eius eveniet exercitationem facilis id inventore labore mollitia nam nulla, pariatur perspiciatis quas quo sed sit soluta sunt temporibus tenetur voluptatem!</span>
                <span>Ab, architecto consequuntur culpa delectus deleniti deserunt dolores doloribus eius exercitationem facilis fuga hic iste libero magnam minus nam possimus quasi quia quo rem rerum sint sunt ullam veniam voluptatibus.</span>
                <span>Exercitationem ipsum, recusandae. Ab ad, architecto aut dolores enim impedit laboriosam magni maxime, molestias numquam perspiciatis quia sapiente sequi suscipit voluptates? Aliquam aut fugit nobis obcaecati quis quisquam tenetur, ullam.</span>
                <span>Aliquid eveniet exercitationem impedit itaque omnis perspiciatis provident reprehenderit sapiente soluta voluptatem. Ab, animi delectus, dicta dolor dolore est explicabo fuga molestias obcaecati odio perspiciatis quas recusandae repellendus, sint veniam?</span>
                <span>Ab alias aliquam, asperiores at aut autem consequuntur delectus eaque illum molestiae molestias natus non obcaecati, officiis quae saepe tempora tenetur ut, veritatis voluptatibus? Consequuntur cupiditate dolorum fugit iure voluptatem?</span>
                <span>Alias cum dicta et quisquam soluta. Amet aperiam consectetur culpa cum cupiditate doloremque dolores, et eveniet facere, illo, laboriosam maxime minus officia placeat quasi quod ratione tempora voluptate voluptatem voluptates.</span>
                <span>Ab cum dolores ea enim fuga repellendus ut veniam? Consectetur consequuntur magni neque tenetur voluptatibus. Accusantium ducimus enim, excepturi ipsum libero, magnam minima pariatur quo recusandae temporibus vel velit voluptates!</span>
                <span>Doloribus ex minus nihil suscipit? Asperiores beatae consequatur libero tempora voluptate. Consequatur consequuntur eveniet illo nulla possimus quia. Assumenda facere harum nihil officia omnis, quo sed. Alias illum nisi officia.</span>
                <span>Delectus dolore dolores maiores minima necessitatibus nisi numquam, quae reiciendis tempore voluptas. Assumenda dicta eligendi enim eos, eveniet molestiae non totam voluptatibus! Eligendi hic labore minima molestias sint, temporibus voluptates?</span>
                <span>Ab accusamus amet, atque, autem commodi culpa earum et exercitationem illo in, incidunt libero molestiae necessitatibus nemo neque nulla numquam porro provident qui quis ratione sint suscipit tenetur veniam voluptatem!</span>
                <span>Ad aliquam animi, aspernatur delectus dicta dolore ducimus eaque eos est, excepturi fuga harum molestiae nobis, numquam odit quas recusandae reiciendis repudiandae voluptatem voluptates? Aperiam debitis ducimus eos est quo!</span>
                <span>Ab aliquam amet aspernatur assumenda autem deleniti dolorem doloremque eaque eos, eveniet explicabo incidunt ipsam labore magnam natus nobis nulla numquam perferendis perspiciatis possimus praesentium provident quae quisquam sapiente sed!</span>
                <span>Ad adipisci alias, aliquid architecto beatae delectus et, eum excepturi facilis illum nam natus nisi numquam porro quaerat quas quibusdam quisquam ratione sint, suscipit tempora velit voluptatibus. Ad tempora, veniam.</span>
                <span>At deserunt dolores eaque nam natus nobis possimus ratione. A aliquid consectetur deserunt id, praesentium quod temporibus? Accusantium, aliquam aspernatur aut excepturi, facere illum magni minima neque quidem sed voluptatem.</span>
                <span>Cum et iure necessitatibus nesciunt perferendis provident quidem, repellendus. Eos, fugiat quaerat quos sunt tempora vero. Et, modi, reprehenderit! Asperiores culpa debitis ea enim itaque, qui quibusdam rem. Consequuntur, cum!</span>
                <span>Ab amet asperiores, doloremque dolorum incidunt iure laboriosam neque praesentium quam quibusdam veniam voluptatum. Ad assumenda dolorum est quisquam recusandae? Aliquam amet dolor doloribus explicabo facilis harum illum optio possimus.</span>
                <span>Ducimus facilis laboriosam minima rerum. Autem deserunt dicta enim et eum eveniet harum iure iusto magnam minus optio, perspiciatis quas quo recusandae temporibus veritatis, vitae voluptate? Cum molestiae quod unde?</span>
                <span>Aliquam at cumque deleniti dolore ea ex explicabo fugiat illo in incidunt minus molestiae mollitia necessitatibus nostrum officiis porro possimus provident, quia quibusdam repudiandae, sapiente sunt totam! Aliquid, labore, veniam?</span>
                <span>Accusamus adipisci autem consequuntur corporis cupiditate debitis delectus dolorem doloremque, eligendi est et eum exercitationem in ipsam labore laudantium, nisi non numquam quaerat quasi quis, repellendus suscipit tempora tenetur totam.</span>
                <span>Eius exercitationem facere nulla sapiente! Consectetur consequuntur error id iusto odit placeat quasi quos ratione sint suscipit? Est exercitationem ipsa qui quibusdam quis ratione reiciendis sit tempora tempore vel. Commodi.</span>
                <span>Explicabo facere quis quisquam rerum sequi. A animi architecto blanditiis cum debitis dolorum ea expedita, fugit, harum hic id in inventore iure nihil obcaecati optio repellendus voluptatem. Quasi, reprehenderit voluptate.</span>
                <span>Aliquid consequatur culpa cum earum est repellendus rerum. Animi atque culpa dolorum error explicabo incidunt obcaecati officia, placeat sit voluptas. Ab consequatur distinctio dolorem eum, exercitationem illum iure quisquam rerum.</span>
            </p>
            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum maiores nulla tenetur. Accusamus, accusantium asperiores doloribus eius fugiat, fugit illo incidunt ipsum laudantium maxime porro rem repudiandae soluta suscipit.</span>
                <span>Deleniti est facilis laborum libero molestias, quia? Animi autem debitis deleniti, dignissimos doloremque ea eaque facere, id inventore ipsa laudantium nesciunt nulla obcaecati placeat praesentium quia reprehenderit suscipit voluptate. Voluptatum.</span>
                <span>Ab amet atque, consectetur distinctio esse impedit itaque officia optio, provident quam reprehenderit sapiente. Accusamus assumenda corporis dolore eius et incidunt libero nostrum officia placeat, quaerat quasi quisquam temporibus vitae?</span>
                <span>Alias aliquam animi cum, delectus deleniti doloremque ducimus ex excepturi hic id illo in ipsum libero magni modi necessitatibus nihil non nulla optio porro quaerat repellendus reprehenderit sed voluptas voluptate?</span>
                <span>Alias aliquid aperiam at consequatur et, exercitationem illum labore magni maxime modi necessitatibus nulla pariatur quos vel, velit? Delectus fugiat non officiis placeat porro quibusdam quod, rem sapiente voluptate? Voluptate.</span>
                <span>Ab accusantium, aliquam at eos eveniet ex qui quo repellat tenetur voluptatibus? Doloremque eveniet excepturi ipsam, itaque maxime minima, modi molestias neque odit placeat quae unde? Ab neque possimus quia?</span>
                <span>Alias, aliquid aut autem dolor dolorem earum eligendi eos error explicabo illum inventore labore laborum modi mollitia numquam possimus quae quibusdam quo recusandae, sequi similique sint temporibus totam velit vitae.</span>
                <span>Accusamus dolor nobis perferendis placeat possimus quaerat, rem suscipit voluptatem. Accusamus alias cupiditate eius illum nulla quae quidem similique unde? Accusamus aliquam expedita fuga iusto laboriosam officia perspiciatis sint velit.</span><span>Commodi harum magnam nemo soluta? A amet aspernatur assumenda consequatur dignissimos earum est ipsum laudantium mollitia nulla odit perferendis quae, quod repellat repellendus reprehenderit temporibus totam, ut vel velit vero!</span>
                <span>A, adipisci asperiores at cupiditate delectus, distinctio illum impedit, laudantium magnam maxime molestias odit optio pariatur qui quis quisquam quod. Atque iure iusto laboriosam minus, nesciunt pariatur perspiciatis rem repellat!</span>
                <span>Ab, accusamus ad aperiam at atque, beatae blanditiis corporis dignissimos dolore et ex fugiat id illum in iste libero mollitia nostrum obcaecati quaerat qui quibusdam ratione repellat tempora vero, voluptatem?</span>
                <span>Beatae dolor est impedit officia quam temporibus velit. Accusamus alias asperiores consequatur culpa delectus dignissimos hic, id iste natus nisi perferendis, quisquam quo quos ratione repellat sed soluta temporibus velit.</span>
                <span>A ad adipisci commodi culpa debitis dignissimos enim eos exercitationem id in incidunt ipsa itaque iure laborum maxime modi molestias odio officia optio perferendis quae quibusdam quis, saepe sed voluptas?</span>
                <span>Accusamus accusantium animi assumenda atque corporis culpa, deserunt doloribus dolorum expedita illum, incidunt labore modi molestias, nam nihil odio officiis provident quaerat quasi quos recusandae reiciendis rerum saepe tempore veniam?</span>
                <span>Accusamus alias asperiores autem, debitis dignissimos, eligendi eos exercitationem expedita facere illo iste iusto mollitia nisi numquam officia quaerat quo reiciendis repellat sint soluta sunt suscipit ut vero voluptas voluptatibus.</span>
                <span>Ab adipisci aliquid autem consequuntur corporis culpa, cupiditate, doloremque dolorum ea eius eum excepturi expedita facere fugiat in laboriosam magnam maiores minus, nemo neque nobis quasi sed tenetur ullam vel!</span>
                <span>Amet aperiam aspernatur consequatur cupiditate distinctio dolores eos error ex expedita hic illo inventore, iusto, laboriosam modi neque nihil nulla omnis possimus, quis rerum soluta totam veniam voluptas voluptates voluptatum.</span>
                <span>Alias culpa eaque iste iusto, quae quaerat voluptatem. Aspernatur eligendi in libero nostrum obcaecati quia? Amet aut consequuntur dolorem, esse fugit hic minus nisi pariatur quidem quis reiciendis saepe voluptas!</span>
                <span>Aliquid atque corporis cupiditate dignissimos doloremque dolores earum facilis illum impedit incidunt inventore iure nemo non, odio omnis recusandae repellat sequi, sit temporibus tenetur. Dolores ipsum magni necessitatibus repudiandae suscipit.</span>
                <span>Aliquid animi aut beatae corporis deserunt dolor doloremque et excepturi incidunt, laudantium, magnam modi, odit quas quia ratione sit ut veniam. Accusantium aperiam deleniti dolorem dolores illo impedit neque quam!</span>
                <span>Accusamus aliquam eaque eius est eveniet nemo numquam officia officiis perspiciatis quam quas recusandae similique sint soluta, totam unde voluptatum. Amet autem beatae dolores impedit maxime modi nobis ratione repellat?</span>
                <span>Ad aut earum eius illum mollitia, nisi quisquam repellendus! Corporis eligendi eveniet facilis impedit, iste necessitatibus voluptate? Architecto, dolorem, eaque enim impedit itaque magni nam nihil optio similique sit vero.</span>
                <span>Culpa id ipsum nemo odit, omnis praesentium sit. Aliquam aspernatur at consequatur culpa cumque dolor dolore ea, inventore minus, numquam, obcaecati odio provident quis quo quos repudiandae sint veritatis voluptas.</span>
                <span>Impedit incidunt iusto perspiciatis quam quasi. Eaque, fugit, quod. Ab architecto asperiores beatae dolorem dolores dolorum earum, esse et eveniet excepturi ipsum maxime minus nostrum quia ratione tempora unde voluptatibus.</span>
                <span>Ad adipisci aperiam atque cupiditate deleniti, doloribus in iusto magnam maiores minima mollitia nam non officia, provident quibusdam quod recusandae rem saepe tenetur unde vel voluptate voluptates voluptatum! Eum, officiis!</span>
                <span>Accusamus amet atque culpa eos, suscipit ullam voluptatibus! Aspernatur assumenda corporis eius est ex facilis odit quod suscipit vel? Animi aperiam atque dolore id libero magnam nemo, numquam pariatur quae?</span>
                <span>Adipisci maxime molestias nostrum praesentium quo sit tenetur. Accusantium architecto cupiditate eius esse est exercitationem facilis harum id minima molestiae neque nihil officiis porro possimus quaerat reiciendis sit tenetur, voluptatem?</span>
                <span>Adipisci amet cum esse iusto nihil officia officiis quis repellat reprehenderit vitae. Amet cum doloremque fugiat inventore iure modi, nam, nemo nisi perferendis porro quia recusandae unde ut vero voluptates?</span>
                <span>Accusantium aliquam architecto asperiores at consequuntur doloremque dolores doloribus eius eveniet exercitationem facilis id inventore labore mollitia nam nulla, pariatur perspiciatis quas quo sed sit soluta sunt temporibus tenetur voluptatem!</span>
                <span>Ab, architecto consequuntur culpa delectus deleniti deserunt dolores doloribus eius exercitationem facilis fuga hic iste libero magnam minus nam possimus quasi quia quo rem rerum sint sunt ullam veniam voluptatibus.</span>
                <span>Exercitationem ipsum, recusandae. Ab ad, architecto aut dolores enim impedit laboriosam magni maxime, molestias numquam perspiciatis quia sapiente sequi suscipit voluptates? Aliquam aut fugit nobis obcaecati quis quisquam tenetur, ullam.</span>
                <span>Aliquid eveniet exercitationem impedit itaque omnis perspiciatis provident reprehenderit sapiente soluta voluptatem. Ab, animi delectus, dicta dolor dolore est explicabo fuga molestias obcaecati odio perspiciatis quas recusandae repellendus, sint veniam?</span>
                <span>Ab alias aliquam, asperiores at aut autem consequuntur delectus eaque illum molestiae molestias natus non obcaecati, officiis quae saepe tempora tenetur ut, veritatis voluptatibus? Consequuntur cupiditate dolorum fugit iure voluptatem?</span>
                <span>Alias cum dicta et quisquam soluta. Amet aperiam consectetur culpa cum cupiditate doloremque dolores, et eveniet facere, illo, laboriosam maxime minus officia placeat quasi quod ratione tempora voluptate voluptatem voluptates.</span>
                <span>Ab cum dolores ea enim fuga repellendus ut veniam? Consectetur consequuntur magni neque tenetur voluptatibus. Accusantium ducimus enim, excepturi ipsum libero, magnam minima pariatur quo recusandae temporibus vel velit voluptates!</span>
                <span>Doloribus ex minus nihil suscipit? Asperiores beatae consequatur libero tempora voluptate. Consequatur consequuntur eveniet illo nulla possimus quia. Assumenda facere harum nihil officia omnis, quo sed. Alias illum nisi officia.</span>
                <span>Delectus dolore dolores maiores minima necessitatibus nisi numquam, quae reiciendis tempore voluptas. Assumenda dicta eligendi enim eos, eveniet molestiae non totam voluptatibus! Eligendi hic labore minima molestias sint, temporibus voluptates?</span>
                <span>Ab accusamus amet, atque, autem commodi culpa earum et exercitationem illo in, incidunt libero molestiae necessitatibus nemo neque nulla numquam porro provident qui quis ratione sint suscipit tenetur veniam voluptatem!</span>
                <span>Ad aliquam animi, aspernatur delectus dicta dolore ducimus eaque eos est, excepturi fuga harum molestiae nobis, numquam odit quas recusandae reiciendis repudiandae voluptatem voluptates? Aperiam debitis ducimus eos est quo!</span>
                <span>Ab aliquam amet aspernatur assumenda autem deleniti dolorem doloremque eaque eos, eveniet explicabo incidunt ipsam labore magnam natus nobis nulla numquam perferendis perspiciatis possimus praesentium provident quae quisquam sapiente sed!</span>
                <span>Ad adipisci alias, aliquid architecto beatae delectus et, eum excepturi facilis illum nam natus nisi numquam porro quaerat quas quibusdam quisquam ratione sint, suscipit tempora velit voluptatibus. Ad tempora, veniam.</span>
                <span>At deserunt dolores eaque nam natus nobis possimus ratione. A aliquid consectetur deserunt id, praesentium quod temporibus? Accusantium, aliquam aspernatur aut excepturi, facere illum magni minima neque quidem sed voluptatem.</span>
                <span>Cum et iure necessitatibus nesciunt perferendis provident quidem, repellendus. Eos, fugiat quaerat quos sunt tempora vero. Et, modi, reprehenderit! Asperiores culpa debitis ea enim itaque, qui quibusdam rem. Consequuntur, cum!</span>
                <span>Ab amet asperiores, doloremque dolorum incidunt iure laboriosam neque praesentium quam quibusdam veniam voluptatum. Ad assumenda dolorum est quisquam recusandae? Aliquam amet dolor doloribus explicabo facilis harum illum optio possimus.</span>
                <span>Ducimus facilis laboriosam minima rerum. Autem deserunt dicta enim et eum eveniet harum iure iusto magnam minus optio, perspiciatis quas quo recusandae temporibus veritatis, vitae voluptate? Cum molestiae quod unde?</span>
                <span>Aliquam at cumque deleniti dolore ea ex explicabo fugiat illo in incidunt minus molestiae mollitia necessitatibus nostrum officiis porro possimus provident, quia quibusdam repudiandae, sapiente sunt totam! Aliquid, labore, veniam?</span>
                <span>Accusamus adipisci autem consequuntur corporis cupiditate debitis delectus dolorem doloremque, eligendi est et eum exercitationem in ipsam labore laudantium, nisi non numquam quaerat quasi quis, repellendus suscipit tempora tenetur totam.</span>
                <span>Eius exercitationem facere nulla sapiente! Consectetur consequuntur error id iusto odit placeat quasi quos ratione sint suscipit? Est exercitationem ipsa qui quibusdam quis ratione reiciendis sit tempora tempore vel. Commodi.</span>
                <span>Explicabo facere quis quisquam rerum sequi. A animi architecto blanditiis cum debitis dolorum ea expedita, fugit, harum hic id in inventore iure nihil obcaecati optio repellendus voluptatem. Quasi, reprehenderit voluptate.</span>
                <span>Aliquid consequatur culpa cum earum est repellendus rerum. Animi atque culpa dolorum error explicabo incidunt obcaecati officia, placeat sit voluptas. Ab consequatur distinctio dolorem eum, exercitationem illum iure quisquam rerum.</span>
            </p>
            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias earum maiores nulla tenetur. Accusamus, accusantium asperiores doloribus eius fugiat, fugit illo incidunt ipsum laudantium maxime porro rem repudiandae soluta suscipit.</span>
                <span>Deleniti est facilis laborum libero molestias, quia? Animi autem debitis deleniti, dignissimos doloremque ea eaque facere, id inventore ipsa laudantium nesciunt nulla obcaecati placeat praesentium quia reprehenderit suscipit voluptate. Voluptatum.</span>
                <span>Ab amet atque, consectetur distinctio esse impedit itaque officia optio, provident quam reprehenderit sapiente. Accusamus assumenda corporis dolore eius et incidunt libero nostrum officia placeat, quaerat quasi quisquam temporibus vitae?</span>
                <span>Alias aliquam animi cum, delectus deleniti doloremque ducimus ex excepturi hic id illo in ipsum libero magni modi necessitatibus nihil non nulla optio porro quaerat repellendus reprehenderit sed voluptas voluptate?</span>
                <span>Alias aliquid aperiam at consequatur et, exercitationem illum labore magni maxime modi necessitatibus nulla pariatur quos vel, velit? Delectus fugiat non officiis placeat porro quibusdam quod, rem sapiente voluptate? Voluptate.</span>
                <span>Ab accusantium, aliquam at eos eveniet ex qui quo repellat tenetur voluptatibus? Doloremque eveniet excepturi ipsam, itaque maxime minima, modi molestias neque odit placeat quae unde? Ab neque possimus quia?</span>
                <span>Alias, aliquid aut autem dolor dolorem earum eligendi eos error explicabo illum inventore labore laborum modi mollitia numquam possimus quae quibusdam quo recusandae, sequi similique sint temporibus totam velit vitae.</span>
                <span>Accusamus dolor nobis perferendis placeat possimus quaerat, rem suscipit voluptatem. Accusamus alias cupiditate eius illum nulla quae quidem similique unde? Accusamus aliquam expedita fuga iusto laboriosam officia perspiciatis sint velit.</span><span>Commodi harum magnam nemo soluta? A amet aspernatur assumenda consequatur dignissimos earum est ipsum laudantium mollitia nulla odit perferendis quae, quod repellat repellendus reprehenderit temporibus totam, ut vel velit vero!</span>
                <span>A, adipisci asperiores at cupiditate delectus, distinctio illum impedit, laudantium magnam maxime molestias odit optio pariatur qui quis quisquam quod. Atque iure iusto laboriosam minus, nesciunt pariatur perspiciatis rem repellat!</span>
                <span>Ab, accusamus ad aperiam at atque, beatae blanditiis corporis dignissimos dolore et ex fugiat id illum in iste libero mollitia nostrum obcaecati quaerat qui quibusdam ratione repellat tempora vero, voluptatem?</span>
                <span>Beatae dolor est impedit officia quam temporibus velit. Accusamus alias asperiores consequatur culpa delectus dignissimos hic, id iste natus nisi perferendis, quisquam quo quos ratione repellat sed soluta temporibus velit.</span>
                <span>A ad adipisci commodi culpa debitis dignissimos enim eos exercitationem id in incidunt ipsa itaque iure laborum maxime modi molestias odio officia optio perferendis quae quibusdam quis, saepe sed voluptas?</span>
                <span>Accusamus accusantium animi assumenda atque corporis culpa, deserunt doloribus dolorum expedita illum, incidunt labore modi molestias, nam nihil odio officiis provident quaerat quasi quos recusandae reiciendis rerum saepe tempore veniam?</span>
                <span>Accusamus alias asperiores autem, debitis dignissimos, eligendi eos exercitationem expedita facere illo iste iusto mollitia nisi numquam officia quaerat quo reiciendis repellat sint soluta sunt suscipit ut vero voluptas voluptatibus.</span>
                <span>Ab adipisci aliquid autem consequuntur corporis culpa, cupiditate, doloremque dolorum ea eius eum excepturi expedita facere fugiat in laboriosam magnam maiores minus, nemo neque nobis quasi sed tenetur ullam vel!</span>
                <span>Amet aperiam aspernatur consequatur cupiditate distinctio dolores eos error ex expedita hic illo inventore, iusto, laboriosam modi neque nihil nulla omnis possimus, quis rerum soluta totam veniam voluptas voluptates voluptatum.</span>
                <span>Alias culpa eaque iste iusto, quae quaerat voluptatem. Aspernatur eligendi in libero nostrum obcaecati quia? Amet aut consequuntur dolorem, esse fugit hic minus nisi pariatur quidem quis reiciendis saepe voluptas!</span>
                <span>Aliquid atque corporis cupiditate dignissimos doloremque dolores earum facilis illum impedit incidunt inventore iure nemo non, odio omnis recusandae repellat sequi, sit temporibus tenetur. Dolores ipsum magni necessitatibus repudiandae suscipit.</span>
                <span>Aliquid animi aut beatae corporis deserunt dolor doloremque et excepturi incidunt, laudantium, magnam modi, odit quas quia ratione sit ut veniam. Accusantium aperiam deleniti dolorem dolores illo impedit neque quam!</span>
                <span>Accusamus aliquam eaque eius est eveniet nemo numquam officia officiis perspiciatis quam quas recusandae similique sint soluta, totam unde voluptatum. Amet autem beatae dolores impedit maxime modi nobis ratione repellat?</span>
                <span>Ad aut earum eius illum mollitia, nisi quisquam repellendus! Corporis eligendi eveniet facilis impedit, iste necessitatibus voluptate? Architecto, dolorem, eaque enim impedit itaque magni nam nihil optio similique sit vero.</span>
                <span>Culpa id ipsum nemo odit, omnis praesentium sit. Aliquam aspernatur at consequatur culpa cumque dolor dolore ea, inventore minus, numquam, obcaecati odio provident quis quo quos repudiandae sint veritatis voluptas.</span>
                <span>Impedit incidunt iusto perspiciatis quam quasi. Eaque, fugit, quod. Ab architecto asperiores beatae dolorem dolores dolorum earum, esse et eveniet excepturi ipsum maxime minus nostrum quia ratione tempora unde voluptatibus.</span>
                <span>Ad adipisci aperiam atque cupiditate deleniti, doloribus in iusto magnam maiores minima mollitia nam non officia, provident quibusdam quod recusandae rem saepe tenetur unde vel voluptate voluptates voluptatum! Eum, officiis!</span>
                <span>Accusamus amet atque culpa eos, suscipit ullam voluptatibus! Aspernatur assumenda corporis eius est ex facilis odit quod suscipit vel? Animi aperiam atque dolore id libero magnam nemo, numquam pariatur quae?</span>
                <span>Adipisci maxime molestias nostrum praesentium quo sit tenetur. Accusantium architecto cupiditate eius esse est exercitationem facilis harum id minima molestiae neque nihil officiis porro possimus quaerat reiciendis sit tenetur, voluptatem?</span>
                <span>Adipisci amet cum esse iusto nihil officia officiis quis repellat reprehenderit vitae. Amet cum doloremque fugiat inventore iure modi, nam, nemo nisi perferendis porro quia recusandae unde ut vero voluptates?</span>
                <span>Accusantium aliquam architecto asperiores at consequuntur doloremque dolores doloribus eius eveniet exercitationem facilis id inventore labore mollitia nam nulla, pariatur perspiciatis quas quo sed sit soluta sunt temporibus tenetur voluptatem!</span>
                <span>Ab, architecto consequuntur culpa delectus deleniti deserunt dolores doloribus eius exercitationem facilis fuga hic iste libero magnam minus nam possimus quasi quia quo rem rerum sint sunt ullam veniam voluptatibus.</span>
                <span>Exercitationem ipsum, recusandae. Ab ad, architecto aut dolores enim impedit laboriosam magni maxime, molestias numquam perspiciatis quia sapiente sequi suscipit voluptates? Aliquam aut fugit nobis obcaecati quis quisquam tenetur, ullam.</span>
                <span>Aliquid eveniet exercitationem impedit itaque omnis perspiciatis provident reprehenderit sapiente soluta voluptatem. Ab, animi delectus, dicta dolor dolore est explicabo fuga molestias obcaecati odio perspiciatis quas recusandae repellendus, sint veniam?</span>
                <span>Ab alias aliquam, asperiores at aut autem consequuntur delectus eaque illum molestiae molestias natus non obcaecati, officiis quae saepe tempora tenetur ut, veritatis voluptatibus? Consequuntur cupiditate dolorum fugit iure voluptatem?</span>
                <span>Alias cum dicta et quisquam soluta. Amet aperiam consectetur culpa cum cupiditate doloremque dolores, et eveniet facere, illo, laboriosam maxime minus officia placeat quasi quod ratione tempora voluptate voluptatem voluptates.</span>
                <span>Ab cum dolores ea enim fuga repellendus ut veniam? Consectetur consequuntur magni neque tenetur voluptatibus. Accusantium ducimus enim, excepturi ipsum libero, magnam minima pariatur quo recusandae temporibus vel velit voluptates!</span>
                <span>Doloribus ex minus nihil suscipit? Asperiores beatae consequatur libero tempora voluptate. Consequatur consequuntur eveniet illo nulla possimus quia. Assumenda facere harum nihil officia omnis, quo sed. Alias illum nisi officia.</span>
                <span>Delectus dolore dolores maiores minima necessitatibus nisi numquam, quae reiciendis tempore voluptas. Assumenda dicta eligendi enim eos, eveniet molestiae non totam voluptatibus! Eligendi hic labore minima molestias sint, temporibus voluptates?</span>
                <span>Ab accusamus amet, atque, autem commodi culpa earum et exercitationem illo in, incidunt libero molestiae necessitatibus nemo neque nulla numquam porro provident qui quis ratione sint suscipit tenetur veniam voluptatem!</span>
                <span>Ad aliquam animi, aspernatur delectus dicta dolore ducimus eaque eos est, excepturi fuga harum molestiae nobis, numquam odit quas recusandae reiciendis repudiandae voluptatem voluptates? Aperiam debitis ducimus eos est quo!</span>
                <span>Ab aliquam amet aspernatur assumenda autem deleniti dolorem doloremque eaque eos, eveniet explicabo incidunt ipsam labore magnam natus nobis nulla numquam perferendis perspiciatis possimus praesentium provident quae quisquam sapiente sed!</span>
                <span>Ad adipisci alias, aliquid architecto beatae delectus et, eum excepturi facilis illum nam natus nisi numquam porro quaerat quas quibusdam quisquam ratione sint, suscipit tempora velit voluptatibus. Ad tempora, veniam.</span>
                <span>At deserunt dolores eaque nam natus nobis possimus ratione. A aliquid consectetur deserunt id, praesentium quod temporibus? Accusantium, aliquam aspernatur aut excepturi, facere illum magni minima neque quidem sed voluptatem.</span>
                <span>Cum et iure necessitatibus nesciunt perferendis provident quidem, repellendus. Eos, fugiat quaerat quos sunt tempora vero. Et, modi, reprehenderit! Asperiores culpa debitis ea enim itaque, qui quibusdam rem. Consequuntur, cum!</span>
                <span>Ab amet asperiores, doloremque dolorum incidunt iure laboriosam neque praesentium quam quibusdam veniam voluptatum. Ad assumenda dolorum est quisquam recusandae? Aliquam amet dolor doloribus explicabo facilis harum illum optio possimus.</span>
                <span>Ducimus facilis laboriosam minima rerum. Autem deserunt dicta enim et eum eveniet harum iure iusto magnam minus optio, perspiciatis quas quo recusandae temporibus veritatis, vitae voluptate? Cum molestiae quod unde?</span>
                <span>Aliquam at cumque deleniti dolore ea ex explicabo fugiat illo in incidunt minus molestiae mollitia necessitatibus nostrum officiis porro possimus provident, quia quibusdam repudiandae, sapiente sunt totam! Aliquid, labore, veniam?</span>
                <span>Accusamus adipisci autem consequuntur corporis cupiditate debitis delectus dolorem doloremque, eligendi est et eum exercitationem in ipsam labore laudantium, nisi non numquam quaerat quasi quis, repellendus suscipit tempora tenetur totam.</span>
                <span>Eius exercitationem facere nulla sapiente! Consectetur consequuntur error id iusto odit placeat quasi quos ratione sint suscipit? Est exercitationem ipsa qui quibusdam quis ratione reiciendis sit tempora tempore vel. Commodi.</span>
                <span>Explicabo facere quis quisquam rerum sequi. A animi architecto blanditiis cum debitis dolorum ea expedita, fugit, harum hic id in inventore iure nihil obcaecati optio repellendus voluptatem. Quasi, reprehenderit voluptate.</span>
                <span>Aliquid consequatur culpa cum earum est repellendus rerum. Animi atque culpa dolorum error explicabo incidunt obcaecati officia, placeat sit voluptas. Ab consequatur distinctio dolorem eum, exercitationem illum iure quisquam rerum.</span>
            </p>
        </>
    )
}