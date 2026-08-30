'use client'

import { useEffect, useState } from "react";
import { getProposals } from "../../api/getProposals";
import toast from "react-hot-toast";
import React from "react";
import { ProposalBackendDataType } from "../../types/ProposalBackendData.type";

function ProposalTable({ header }: { header: string[] }) {
    const [data, setData] = useState<ProposalTableItemType[]>([])


    useEffect(() => {
        async function setProposals() {
            const response = await getProposals()
            const data = response.data as unknown as ProposalBackendDataType[]
            if (response.success) {
                let changedData: ProposalTableItemType[] = []


                data.forEach(item => {

                    let selections = [];
                    item.ambientMeasurements && selections.push("Ortam Ölçümleri");
                    item.basicOhsTraining && selections.push("Temel İSG Eğitimi");
                    item.osgbService && selections.push("OSGB Hizmeti");
                    item.workplacePhysician && selections.push("İşyeri Hekimi");
                    item.explosionProtectionDocument && selections.push("Patlamadan Korunma Dokümanı");
                    item.ohsSpecialist && selections.push("İSG Uzmanı");
                    item.ambientMeasurements && selections.push("Ortam Ölçümleri");
                    item.mobileHealthVehicle && selections.push("Mobil Sağlık Aracı");
                    item.workplaceNurse && selections.push("İşyeri Hemşiresi");
                    item.workingAtHeightTraining && selections.push("Yüksekte Çalışma Eğitimi");


                    changedData.push({
                        city: item.city,
                        brandName: item.brandName,
                        email: item.email,
                        dangerCat: item.dangerCat,
                        employeeCount: item.employeeCount,
                        ownerName: item.ownerName,
                        phoneNumber: item.phoneNumber,
                        whenStart: item.whenStart,
                        selections: selections
                    })
                });

                console.log(changedData)
                setData(changedData)
            }
            else {
                toast.error(response.message)
            }

        }


        setProposals();
    }, [])



    return (<>


        <div className="shadow-2xl shadow-black/50 border grid grid-cols-[3fr_3fr_3fr_3fr_1fr_3fr_3fr_4fr_5fr] place-items-center rounded-2xl p-3 items-center  max-h-180">


            {header.map((item, index) => <label className="tracking-tight border-b-2 leading-relaxed " key={index}>{item}</label>)}


            {data.map((item, index) => <React.Fragment key={index}>


                <span>{item.brandName}</span>
                <span>{item.ownerName}</span>
                <span>{item.phoneNumber}</span>
                <span>{item.email}</span>
                <span>{item.city}</span>
                <span>{item.dangerCat}</span>
                <span>{item.employeeCount}</span>
                <span>{item.whenStart}</span>
                <span className=" mt-2 flex flex-col items-center justify-center">{item.selections.map((item,index) => <label key={index}>{item}</label>)}</span>


            </React.Fragment>)}


        </div>


    </>);
}

export default ProposalTable;