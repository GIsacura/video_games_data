"use client";
import React from "react";
import RightArrow from "../assets/icons/svg/arrow-right.svg";
import LeftArrow from "../assets/icons/svg/arrow-left.svg";
import Image from "next/image";
import { GetAllGamesResponse } from "@/services/game.service";
import { useRouter, useSearchParams } from "next/navigation";

export interface PaginationProps {
	totalRecords: number;
}

const Pagination = ({ totalRecords }: PaginationProps) => {
	const searchParams = useSearchParams();
	const { replace } = useRouter();
	const params = new URLSearchParams(searchParams);
	const page = parseInt(params.get("page") || "1", 10);

	const pageNumbers = (): (number | string)[] => {
		const pages: (number | string)[] = [];
		let ellipsisNeeded = false;

		for (let i = 1; i <= Math.ceil(totalRecords / 50); i++) {
			if (
				i <= 2 ||
				i > Math.ceil(totalRecords / 50) - 2 ||
				(i >= page - 2 && i <= page + 2)
			) {
				pages.push(i);
				ellipsisNeeded = true;
			} else if (ellipsisNeeded) {
				pages.push("...");
				ellipsisNeeded = false;
			}
		}
		return pages;
	};

	const handleChangePage = (pageNumber: number) => {
		params.set("page", pageNumber.toString());

		replace(`/?${params.toString()}`);
	};

	return (
		<div className="flex justify-center items-center">
			<span className="mx-1">
				{page !== 1 && (
					<Image
						className="cursor-pointer"
						src={LeftArrow}
						alt="left arrow"
						width={20}
						height={20}
						onClick={() => handleChangePage(Number(page) - 1)}
					/>
				)}
			</span>
			<div>
				{pageNumbers().map((pageNumber) => (
					<span
						key={pageNumber}
						className={`mx-1 cursor-pointer hover:border-b hover:border-b-slate-400 ${
							pageNumber === page ? "border-b" : ""
						}`}
						onClick={() => handleChangePage(Number(pageNumber))}
					>
						{pageNumber.toLocaleString("en-US")}
					</span>
				))}
			</div>
			<span className="mx-1">
				{page !== Math.ceil(totalRecords / 50) && (
					<Image
						className="cursor-pointer"
						src={RightArrow}
						alt="left arrow"
						width={20}
						height={20}
						onClick={() => handleChangePage(Number(page) + 1)}
					/>
				)}
			</span>
		</div>
	);
};

export default Pagination;
