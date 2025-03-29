'use client';

import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';
import { AccountFormSchema } from '@/lib/utils';
import PersonalInput from './PersonalInputForm';



const PersonalInfo = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof AccountFormSchema>>({
        resolver: zodResolver(AccountFormSchema),
        defaultValues: {
          All_active_acc: 0,
          Default_acc: 0,
          Acc_opened_12m: 0,
          Acc_age: 0,
          Balance: 0,
          no_of_defaults: 0,
        },
    });

    const onSubmit = async (data: z.infer<typeof AccountFormSchema>) => {
        setIsLoading(true);
        try {
            console.log("Form Submitted:", data);
            // Your API call or further logic goes here
        } catch (error) {
            console.log("Error submitting form:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className='account-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    Account Information Form
                </h1>
                <p className='text-16 font-normal text-gray-600'>
                    Please fill in the details below.
                </p>
            </header>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <PersonalInput control={form.control} name='All_active_acc' label="All Active Accounts" placeholder='Enter number of active accounts' />
                    <PersonalInput control={form.control} name='Default_acc' label="Default Accounts" placeholder='Enter number of default accounts' />
                    <PersonalInput control={form.control} name='Acc_opened_12m' label="Accounts Opened in 12 Months" placeholder='Enter number of accounts opened in last 12 months' />
                    <PersonalInput control={form.control} name='Acc_age' label="Account Age (in years)" placeholder='Enter the age of the account' />
                    <PersonalInput control={form.control} name='Balance' label="Balance" placeholder='Enter current balance' />
                    <PersonalInput control={form.control} name='no_of_defaults' label="Number of Defaults" placeholder='Enter the number of defaults' />
                    <div className='flex flex-col gap-4'>
                        <Button type="submit" className='form-btn' disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 size={20} className='animate-spin' /> &nbsp;
                                    Submitting...
                                </>
                            ) : 'Submit'}
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    );
};

export default PersonalInfo;